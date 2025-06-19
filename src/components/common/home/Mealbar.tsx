"use client";
import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { useGetDailyMenu } from "@/hooks/home/useGetDailyMenu";
import { useEffect, useState } from "react";

const Mealbar = () => {
    const { condition, date } = useMealTime();
    const [meal, setMeal] = useState();
    const { getDailyMenu } = useGetDailyMenu();
    
    // 급식 불러오기
    useEffect(() => {
        const fetchMeal = async () => {
            const data = await getDailyMenu(date);
            setMeal(data?.menus?.menuName ?? "등록된 급식이 없습니다.");
        };
        fetchMeal();
    }, []);

    return (
        <div className="w-full bg-white h-16 px-5 py-3.5 flex justify-between items-center rounded-sm">
            <div className="flex gap-2 min-w-64 items-center">
                {/* 아침 점심 저녁 이미지 달라지게 하기 */}
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
            <div className="w-2xs text-placeholder font-normal text-right text-sm">
                {meal}
            </div>
        </div>
    );
};

export default Mealbar;
