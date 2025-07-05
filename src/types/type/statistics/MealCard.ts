export type MenuItem = {
    menuId: number;
    menuName: string;
};

export type MealCard = {
    mealId: number;
    mealDate: string;
    mealType: "조식" | "중식" | "석식";
    calorie: number;
    menus: MenuItem[];
    eaterCount: number;
};
