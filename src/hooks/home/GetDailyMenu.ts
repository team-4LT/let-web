import customAxios from "@/libs/axios/customAxios";

export const getDailyMenu = async (date: String) => {
    try {
        const res = await customAxios.get(`/mealMenu/daily/${date}`);
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
