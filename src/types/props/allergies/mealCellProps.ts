export interface MealCellProps {
  isSelected: boolean
  mealId: number // 식단 ID
  mealDate: string // 날짜
  calorie?: number // 칼로리
  menus?: Menu[] // 메뉴 배열
  onClick?: () => void
}

export interface Menu {
  menuId: number // 메뉴 ID
  menuName: string // 메뉴 이름
}