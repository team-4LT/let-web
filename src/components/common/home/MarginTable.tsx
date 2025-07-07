"use client";
import { RateType } from "@/types/type/home/RateType";
import { getMonthMealRate } from "@/hooks/home/GetMonthRate";
import { useEffect, useState } from "react";
import { useMealTime } from "@/hooks/mealbar/useMealTime";

const Margintable = () => {
  const { condition } = useMealTime();
  const [rate, setRate] = useState<RateType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMonthMealRate();
      if (result) setRate(result);
    };
    fetchData();
  }, []);

  if (!rate) return null;

  return (
    <div className="w-full h-70 px-7 py-5 bg-white rounded-sm flex flex-col gap-8">
      <div className="text-black font-semibold text-base">
        {condition} 평균 식사자 비율
      </div>

      <div className="flex flex-col gap-8">
        {[
          { label: "1학년", value: rate.grade1Ration, color: "bg-main" },
          { label: "2학년", value: rate.grade2Ration, color: "bg-second" },
          { label: "3학년", value: rate.grade3Ration, color: "bg-third" },
        ].map((grade, i) => (
          <div key={i} className="flex gap-3.5 h-10 items-center">
            <div className="text-black font-medium text-base">{grade.label}</div>
            <div
              className={`${grade.color} h-full rounded-tr-sm rounded-br-sm`}
              style={{ width: `${0.3 * grade.value}rem` }}
            />
            <div className="text-black font-medium text-base">
              {grade.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Margintable;
