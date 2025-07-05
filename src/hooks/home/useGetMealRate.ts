import customAxios from "@/libs/axios/customAxios";
import { RateType } from "@/types/type/home/RateType";

export const getMealRate = async (): Promise<RateType[] | null> => {
    try {
        const res = await customAxios.get("/eater/meal-rate");
        if (res.status === 200) {
            console.log(res.data);
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
