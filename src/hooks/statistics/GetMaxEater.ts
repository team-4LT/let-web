import customAxios from "@/libs/axios/customAxios";
import { MealCard } from "@/types/type/statistics/MealCard";

export const getMaxEater = async (
    condition: number = 1
): Promise<MealCard | null> => {
    try {
        const res = await customAxios.get(`/mealMenu/max-eater`);
        if (res.status === 200) {
            console.log(res.data.data);
            return res.data.data[condition];
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
