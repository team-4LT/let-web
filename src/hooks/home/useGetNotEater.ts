import customAxios from "@/libs/axios/customAxios";

export const useGetNotEater = () => {
    const getNotEater = async () => {
        try {
            const res = await customAxios.get(`/eater/not-eaten`);
            if (res.status === 200) {
                console.log("데이터 성공", res.data);
                return res.data;
            }
        } catch (error) {
            console.error("에러 발색", error);
        }
    };
    return { getNotEater };
};
