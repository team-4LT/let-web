import customAxios from "@/libs/axios/customAxios";

export const getMealData = async(selectedPeriod:string) => {
  try{
    const period =
      selectedPeriod==='아침'
        ? '조식'
        : selectedPeriod==='점심'
        ? '중식'
        : '석식';

    const res = await customAxios.get(`/mealMenu/${period}?allergyIds=1%2C2%2C5`)
    return res.data.data
  }catch(err:any){
    console.error(`식단 데이터 불러오기 실패: ${err}`)
    return null
  }
}