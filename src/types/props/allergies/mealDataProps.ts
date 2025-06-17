export interface MealDataProps {
  date: string
  kcal: number
  items: MealItem[]
  // isHoliday: boolean
}

interface MealItem {
  name: string
  allergyInfo: string
}