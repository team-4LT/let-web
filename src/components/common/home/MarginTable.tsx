"use client"

import { useGetMealRate } from "@/hooks/home/useGetMealRate";
import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { mealTypeMap } from "@/types/type/home/RateType";

const Margintable = () => {
  const { condition } = useMealTime(); 
  const {data: rate} = useGetMealRate()

  const mealType = mealTypeMap[condition]; 
  const selected = rate?.find((item:any) => item.mealType === mealType);

return (
  <div className='w-full h-70 px-7 py-5 bg-white rounded-sm flex flex-col gap-8'>
    <div className='text-black font-semibold text-base'>{condition} 평균 식사자 비율</div>
    {rate && (
      <div className='flex flex-col gap-8'>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>1학년</div>
          <div className='bg-main h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * (selected?.grade1Ration ?? 0)}rem` }} />
          <div className='text-black font-medium text-base'>{selected?.grade1Ration}%</div>
        </div>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>2학년</div>
          <div className='bg-second h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * (selected?.grade2Ration ?? 0)}rem` }} />
          <div className='text-black font-medium text-base'>{selected?.grade2Ration}%</div>
        </div>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>3학년</div>
          <div className='bg-third h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * (selected?.grade3Ration ?? 0)}rem` }} />
          <div className='text-black font-medium text-base'>{selected?.grade3Ration}%</div>
        </div>
      </div>
    )}
  </div>
);

    }

export default Margintable
