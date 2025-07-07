export interface DailyMenuType {
    mealId: number;
    mealDate: string;
    mealType: "조식" | "중식" | "석식";
    calorie: number;
    menus: {
        menuId: number;
        menuName: string;
    }[];
}
