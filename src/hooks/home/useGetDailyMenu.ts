import customAxios from "@/libs/axios/customAxios";

export const useGetDailyMenu = () => {
    const getDailyMenu = async (date: String) => {
        try {
            const res = await customAxios.get(`/mealMenu/daily/${date}`);
            if (res.status === 200) {
                console.log(res.data);
                return res.data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { getDailyMenu };
};
