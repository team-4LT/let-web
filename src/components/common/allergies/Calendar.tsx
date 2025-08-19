"use client";

import CalendarHeader from './CalendarHeader'
import { useGetThisMonthProps } from '@/hooks/allergies/useGetThisMonthCalendar'
import { useEffect, useState } from 'react';
import { selectedMealStore } from '@/stores/allergies/selectedDateStore';
import { MealData } from '@/types/props/allergies/mealData';
import { getMealData } from '@/hooks/allergies/useGetMealData';
import CalendarCell from './CalendarCell';

const Calendar = () => {
  const [ mealData, setMealData ] = useState<MealData[]>([]);
  const [ selectedPeriod, setSelectedPeriod ] = useState<'아침' | '점심' | '저녁'>('아침');
  const [ selectedDate, setSelectedDate ] = useState<number>()
  const { setSelectedMeal } = selectedMealStore();
  const { year, month, startWeek, daysThisMonth } = useGetThisMonthProps();

  const totalCells = [
    ...Array(startWeek).fill(null), 
    ...daysThisMonth,
  ];

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < totalCells.length; i += 7) {
    weeks.push(totalCells.slice(i, i + 7));
  }

  const mealMap = new Map<number, MealData>();
  mealData.forEach(meal => {
    const day = parseInt(meal.mealDate.slice(8, 10), 10); //날짜만 추출
    mealMap.set(day, meal);
  });

  useEffect(()=>{
    const fetchData = async () => {
      const result = await getMealData(selectedPeriod);
      if (result) {
        setMealData(result);
        setSelectedMeal(parseInt(result[0].mealDate.slice(8, 10), 10));
        setSelectedDate(parseInt(result[0].mealDate.slice(8, 10), 10));
      }
    };
    fetchData();
  }, [selectedPeriod]);

  return (
    <div className='flex flex-col px-6.25 py-5 bg-white rounded'>

      <div className="flex gap-2">
        {['아침', '점심', '저녁'].map((period) => (
          <div
            key={period}
            className={`flex justify-center py-1 w-14 text-xs font-medium rounded cursor-pointer ${
              selectedPeriod === period
                ? 'bg-second text-white'
                : 'bg-bg text-black hover:bg-gray-300' 
            }`}
            onClick={() => setSelectedPeriod(period as '아침' | '점심' | '저녁')} 
          >
            {period}
          </div>
        ))}
      </div>

      <div className='text-black text-lg font-semibold py-5 flex justify-center'>
        {year}년 {month + 1}월
      </div>

      <div className='flex flex-col gap-1.25'>
        <CalendarHeader />
        
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 justify-center gap-1.25">
            {week.map((day, index) => (
              <CalendarCell
                key={`${weekIdx}-${index}`}
                day={day}
                index={index}
                weekIdx={weekIdx}
                month={month}
                selectedDate={selectedDate}
                mealMap={mealMap}
                setSelectedDate={setSelectedDate}
                setSelectedMeal={setSelectedMeal}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;