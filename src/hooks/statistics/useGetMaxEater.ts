import customAxios from "@/libs/axios/customAxios"

export const useGetMaxEater = () =>{
    const getMaxEater = async() =>{
        try{
            const res = await customAxios.get('/mealMenu/max-eater')
            if (res.status === 200){
                console.log("데이터를 가져왔습니다.")
            }else{
            }
            
        }catch(err: any){
            console.log(err)
        }
    }
    return {getMaxEater}
}