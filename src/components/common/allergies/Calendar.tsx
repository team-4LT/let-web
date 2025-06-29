"use client";

import React from 'react'
import CalendarHeader from './CalendarHeader'
import sampleMealData from '@/data/sampleMeal.json'
import { useGetThisMonthProps } from '@/hooks/allergies/useGetThisMonthCalendar'
import MealCell from './MealCell'
import { selectedDateStore } from '@/stores/allergies/selectedDateStore';
import { useFormatDate } from '@/hooks/allergies/useFormatDate'
 
const Calendar = () => {
  const data = sampleMealData;
  const { year, month, startWeek, daysThisMonth } = useGetThisMonthProps();
  const {selectedDate, setSelectedDate} = selectedDateStore();
  
  const getMealByDate = (day: number) => {
    const formattedDate = useFormatDate(new Date(year, month, day));
  
    return data.find(meal => meal.mealDate.slice(0, 10) === formattedDate);
  }
  
  const getCalorie = (day: number) => {
    const meal = getMealByDate(day);
    return meal?.calorie; 
  }
  
  const getMenu = (day: number) => {
    const meal = getMealByDate(day);
    return meal?.menus;
  }

  const onClickMealCell = (day: number) => {
    setSelectedDate(day);
  }
  
  const totalCells = [
    ...Array(startWeek).fill(null), // 앞에 빈칸
    ...daysThisMonth,
  ];

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < totalCells.length; i += 7) {
    weeks.push(totalCells.slice(i, i + 7));
  }

  return (
    <div className='flex flex-col px-6.25 py-5 bg-white rounded'>
      <div>button</div>

      <div className='text-black text-lg'>
        {year}년 {month + 1}월
      </div>

      <div className='flex flex-col gap-1.25'>
        <CalendarHeader />
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 justify-center gap-1.25">
              {week.map((day, index) =>
                day === null ? (
                  <MealCell
                    key={`empty-${index}`}
                    isSelected={false}
                    mealId={-index}
                    mealDate={''}
                  />
                ) : (
                  <MealCell
                    key={day}
                    isSelected={selectedDate === day}
                    mealId={day}
                    mealDate={day.toString()}
                    calorie={getCalorie(day)}
                    menus={getMenu(day)}
                    onClick={() => onClickMealCell(day)}
                  />
                )
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Calendar