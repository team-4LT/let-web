import customAxios from "@/libs/axios/customAxios"

export const getAllergies = async(selectedMeal:number) => {
  try{
    const res = await customAxios.get(`/menuAllergy/${selectedMeal}`)
    return res.data.data
  }catch(err:any){
    console.error(`알러지 정보 불러오기 실패: ${err}`)
    return null
  }
}