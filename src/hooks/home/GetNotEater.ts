import customAxios from "@/libs/axios/customAxios";

export const getNotEater = async () => {
    try {
        const res = await customAxios.get(`/eater/not-eaten`);
        if (res.status === 200) {
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("에러 발색", error);
        return null;
    }
};
