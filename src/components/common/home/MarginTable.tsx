"use client"

import { useGetMealRate } from "@/hooks/home/useGetMealRate";
import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { mealTypeMap, RateType } from "@/types/type/home/RateType";
import { useEffect, useState } from "react";

const Margintable = () => {
  const { condition } = useMealTime(); 
  const [rate, setRate] = useState<RateType | null>(null);
  const { getMealRate } = useGetMealRate();

  useEffect(() => {
    const fetchRate = async () => {
      const data = await getMealRate();
      const mealType = mealTypeMap[condition]; // "조식", "중식", "석식"
      const selected = data.find((item:any) => item.mealType === mealType);
      setRate(selected || null);
    };
    fetchRate();
  }, [condition]);

return (
  <div className='w-full h-70 px-7 py-5 bg-white rounded-sm flex flex-col gap-8'>
    <div className='text-black font-semibold text-base'>{condition} 평균 식사자 비율</div>
    {rate && (
      <div className='flex flex-col gap-8'>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>1학년</div>
          <div className='bg-main h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * rate.grade1Ration}rem` }} />
          <div className='text-black font-medium text-base'>{rate.grade1Ration}%</div>
        </div>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>2학년</div>
          <div className='bg-second h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * rate.grade2Ration}rem` }} />
          <div className='text-black font-medium text-base'>{rate.grade2Ration}%</div>
        </div>
        <div className='flex gap-3.5 h-10 items-center'>
          <div className='text-black font-medium text-base'>3학년</div>
          <div className='bg-third h-full rounded-tr-sm rounded-br-sm' style={{ width: `${0.3 * rate.grade3Ration}rem` }} />
          <div className='text-black font-medium text-base'>{rate.grade3Ration}%</div>
        </div>
      </div>
    )}
  </div>
);

    }

export default Margintable
