import customAxios from "@/libs/axios/customAxios";

export const useGetMealRate = () => {
    const getMealRate = async () => {
        try {
            const res = await customAxios.get(`/eater/meal-rate`);
            if (res.status === 200) {
                console.log(res.data);
                return res.data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { getMealRate };
};
