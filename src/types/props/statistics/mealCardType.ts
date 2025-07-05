import { MenuItem } from "@/types/type/statistics/MealCard";

export interface MealCardType{
    meal : MenuItem[] | null,
    time : "아침" | "점심" | "저녁",
}