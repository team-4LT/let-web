import React from 'react'
import { MealCellProps } from '@/types/props/allergies/mealCellProps';

const MealCell = (props:MealCellProps) => {
  const { isSelected, mealId, mealDate, calorie, menus, onClick } = props

  return (
    <div
      onClick={onClick}
      className={`p-[10px] border-[0.5px] border-grey bg-white text-black text-xs font-extralight ${isSelected? 'outline-[2px] outline-main border-main': ''}`}
    >
      <div className='text-black text-sm font-medium'>{mealDate}</div>
      <div className='flex flex-col justify-center gap-[5px] mt=[5px]'>
        <div className='text-second text-xs font-medium'>{calorie}</div>
        {menus? menus.map((menu) => (
          <div key={menu.menuId}>
            {menu.menuName}
          </div>
        ))
        : '급식이 없습니다.'}
      </div>
    </div>
    )
  }

export default MealCell;