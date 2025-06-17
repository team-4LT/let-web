import React from 'react'
import { MealDataProps } from '@/types/props/allergies/mealDataProps'

const MealCard = (meal:MealDataProps) => {
  const date = new Date(meal.date)
  const day = date.getDate()
  const weekDay = date.getDay()

  const isHoliday = weekDay === 0 || weekDay === 6

  return (
    <div className="flex flex-col border-grey">
      <div className="text-black text-sm">{day}</div>

      {isHoliday || !meal.items || meal.items.length === 0 ? (
        <div className="mt-2 text-xs text-gray-400">급식이 없습니다.</div>
      ) : (
        <>
          <div className="text-red-500 font-bold text-sm mt-1">
            {meal.kcal?.toFixed(1)} Kcal
          </div>

          <ul className="mt-1 leading-tight list-disc list-inside space-y-[1px] text-[13px]">
            {meal.items.map((item, idx) => (
              <li
                key={idx}
                className={item.name.startsWith('*') ? 'font-semibold text-black' : 'text-gray-800'}
              >
                {item.name} ({item.allergyInfo})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default MealCard