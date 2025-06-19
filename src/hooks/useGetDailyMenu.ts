import axios from "axios";

export const useGetDailyMenu = () => {
    const getDailyMenu = async (date: String) => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/mealMenu/daily/${date}`
            );
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
