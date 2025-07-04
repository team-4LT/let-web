"use client";

import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { useGetDailyMenu } from "@/hooks/home/useGetDailyMenu";
const mealTypeMap = {
    아침: "조식",
    점심: "중식",
    저녁: "석식",
} as const;
type ConditionKey = keyof typeof mealTypeMap;

const Mealbar = () => {
    const { condition, date } = useMealTime(); 
    const { data: meal } = useGetDailyMenu(date);

    const selected = meal?.find(
        (m) => m.mealType === mealTypeMap[condition as ConditionKey]
    );

    return (
        <div className="w-full bg-white h-16 px-5 py-3.5 flex justify-between items-center rounded-sm">
            <div className="flex gap-2 min-w-64 items-center">
                <img
                    src={
                        condition === "아침"
                            ? "/assets/morning.svg"
                            : condition === "점심"
                            ? "/assets/afternoon.svg"
                            : "/assets/night.svg"
                    }
                    className="w-7"
                />
                <div className="text-base text-black font-semibold">
                    오늘의 {condition}
                </div>
            </div>
            <div className="w-2xs text-placeholder font-normal text-right text-sm break-words">
                {selected?.menus?.length
                    ? selected.menus.map((item, index) => (
                          <span key={item.menuId}>
                              {item.menuName}
                              {index !== selected.menus.length - 1 && ", "}
                          </span>
                      ))
                    : "식단 정보 없음"}
            </div>
        </div>
    );
};

export default Mealbar;
