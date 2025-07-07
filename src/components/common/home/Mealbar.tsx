"use client";
import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { getDailyMenu } from "@/hooks/home/GetDailyMenu";
import { useEffect, useState } from "react";

const Mealbar = () => {
    const { condition, date } = useMealTime();
    const [meal, setMeal] = useState<{ menus: { menuName: string }[] }>({menus: []});

    useEffect(() => {
        const fetchMeal = async () => {
            const data = await getDailyMenu(date);
            const selected =
                data[condition === "아침" ? 0 : condition === "점심" ? 1 : 2];
            setMeal(
                selected?.menus
                    ? selected
                    : { menus: [{ menuName: "등록된 급식이 없습니다." }] }
            );
        };
        fetchMeal();
    }, []);

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
                {meal?.menus?.map((item, index) => (
                    <span key={index}>
                        {item.menuName}
                        {index !== meal.menus.length - 1 ? ", " : ""}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Mealbar;
