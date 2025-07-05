import customAxios from "@/libs/axios/customAxios";

export const useGetEater = async (grade: number) => {
    try {
        const res = await customAxios.get(`/eater/${grade}`);
        if (res.status === 200) {
            console.log("식사자 출력 성공");
            console.log(res.data);
            return res.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("에러발생", error);
        return null;
    }
};
