import customAxios from "@/libs/axios/customAxios"

export const getAllergies = async(selectedMeal:number) => {
  try{
    const res = await customAxios.get(`/menuAllergy/${selectedMeal}`)
    return res.data.data
  }catch(err:any){
    console.error(`알러지 정보 불러오기 실패: ${err}`)
    alert('네트워크 오류! 다시 시도해주세요!')
    return null
  }
}