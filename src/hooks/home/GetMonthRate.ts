import customAxios from "@/libs/axios/customAxios";
import { RateType } from "@/types/type/home/RateType";

export const getMonthMealRate = async (): Promise<RateType | null> => {
  try {
    const res = await customAxios.get("/eater/month/meal-rate");
    return res.data[0]; 
  } catch (error) {
    console.error(error);
    return null;
  }
};
