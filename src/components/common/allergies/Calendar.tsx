"use client";

import CalendarHeader from './CalendarHeader'
import { useGetThisMonthProps } from '@/hooks/allergies/useGetThisMonthCalendar'
import MealCell from './MealCell'
import customAxios from '@/libs/axios/customAxios';
import { useEffect, useState } from 'react';
import { selectedMealStore } from '@/stores/allergies/selectedDateStore';

interface MealData {
  mealId: number;
  mealDate: string;
  mealType: string;
  calorie: number;
  menus: Menu[];
}
 
interface Menu {
  menuId: number;
  menuName: string;
}

const Calendar = () => {
  const [ mealData, setMealData ] = useState<MealData[]>();
  const [ selectedPeriod, setSelectedPeriod ] = useState<'아침' | '점심' | '저녁'>('아침');
  const [ selectedDate, setSelectedDate ] = useState(1)
  const { setSelectedMeal } = selectedMealStore();
  const { year, month } = useGetThisMonthProps();

  const getMealdata = async() => {
    try{
      const period =
        selectedPeriod==='아침'
          ? '조식'
          : selectedPeriod==='점심'
          ? '중식'
          : '석식';

      const res = await customAxios.get(`/mealMenu/${period}?allergyIds=1%2C2%2C5`)
      if(res.status==200) setMealData(res.data.data)
    }catch(err:any){
      console.error(`식단 데이터 불러오기 실패: ${err}`)
    }
  }

  useEffect(()=>{
    getMealdata();
  }, [selectedPeriod])

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

      <div className='text-black text-lg'>
        {year}년 {month + 1}월
      </div>

      <div className='flex flex-col gap-1.25'>
        <CalendarHeader />
          {/* {weeks.map((week, weekIndex) => (
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
          ))} */}
          {mealData?.map((meal:MealData) => (
            <MealCell
              key={`${meal.mealId}-${meal.mealDate}`}
              mealId={meal.mealId}
              mealDate={meal.mealDate.slice(8, 10)}
              calorie={meal.calorie}
              menus={meal.menus}
              isSelected={selectedDate === parseInt(meal.mealDate.slice(8, 10), 10)}
              onClick={() => {
                setSelectedDate(parseInt(meal.mealDate.slice(8, 10), 10));
                setSelectedMeal(meal.mealId)
              }}
            />
          ))}
        </div>
    </div>
  );
};

export default Calendar