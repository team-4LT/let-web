import customAxios from "@/libs/axios/customAxios";
import { DailyMenuType } from "@/types/type/home/DailyMenuType";
import { useQuery } from "@tanstack/react-query";

export const useGetDailyMenu = (date: string) => {
    return useQuery<DailyMenuType[]>({
        queryKey: ["daily-menu", date],
        queryFn: async () => {
            const response = await customAxios.get(`/mealMenu/daily/${date}`);
            return response.data;
        },
        staleTime: 1000 * 60 * 5,
        retry: 1,
        enabled: !!date,
    });
};
