import customAxios from "@/libs/axios/customAxios";
import { MealCard } from "@/types/type/statistics/MealCard";

export const getMaxEater = async (condition: number): Promise<MealCard | null> => {
    try {
        const res = await customAxios.get(`/mealMenu/max-eater`);
        if (res.status === 200) {
            return res.data[condition]; 
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
