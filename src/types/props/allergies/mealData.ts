export interface MealData {
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