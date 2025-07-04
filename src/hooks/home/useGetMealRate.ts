import customAxios from "@/libs/axios/customAxios";
import { RateType } from "@/types/type/home/RateType";
import { useQuery } from "@tanstack/react-query";

const fetchMealRate = async (): Promise<RateType[]> => {
    const res = await customAxios.get("/eater/meal-rate");
    return res.data;
};

export const useGetMealRate = () => {
    return useQuery({
        queryKey: ["meal-rate"],
        queryFn: fetchMealRate,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};
