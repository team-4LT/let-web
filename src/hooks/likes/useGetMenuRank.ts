import customAxios from "@/libs/axios/customAxios";

const useGetMenuRank = async (nowPage:number, reverse:boolean) => {
  try {
    const res = await customAxios.get(`/menu-rank?page=${nowPage}&reverse=${reverse}`);
    if (res.status === 200) return res.data.data;
    else return null;
  } catch (err) {
    console.log(err);
    alert('네트워크 오류! 다시 시도해주세요')
    return null;
  }
};

export default useGetMenuRank;