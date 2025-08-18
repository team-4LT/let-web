import { MealCellProps } from '@/types/props/allergies/mealCellProps';

const MealCell = (props:MealCellProps) => {
  const { isSelected, mealId, mealDate, calorie, menus, onClick } = props

  return (
    <div
      onClick={onClick}
      className={`p-2.5 border-1 border-grey bg-white text-black text-xs font-extralight ${isSelected? 'outline-0.5 outline-main border-main': ''}`}
    >
      <div className='text-black text-sm font-medium'>{mealDate}</div>
      <div className='flex flex-col justify-center gap-1.75 mt=1.75'>
        <div className='text-second text-xs font-medium'>{calorie? `${calorie} Kcal`: ''}</div>
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