import customAxios from "@/libs/axios/customAxios";

export const getEater = async (grade: number) => {
    try {
        const res = await customAxios.get(`/eater/${grade}`);
        if (res.status === 200) {
            return res.data.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("에러발생", error);
        return null;
    }
};
