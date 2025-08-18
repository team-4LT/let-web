"use client";
import { useEffect, useState } from "react";
import Mealcard from "./MealCard";
import { getMaxEater } from "@/hooks/statistics/GetMaxEater";
import { MealCard } from "@/types/type/statistics/MealCard";

const MuchTable = () => {
    const [time, setTime] = useState(1);
    const [meal, setMeal] = useState<MealCard | null>(null);

    const decreaseTime = () => setTime((prev) => (prev !== 0 ? prev - 1 : 2));
    const increaseTime = () => setTime((prev) => (prev !== 2 ? prev + 1 : 0));

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMaxEater(time);
            setMeal(result);
        };
        fetchData();
    }, [time]);

    return (
        <div
            className="w-full h-full px-7 py-5 bg-white flex flex-col items-center gap-6 rounded-sm"
            style={{ width: `${53.125 / 2 - 1.25 / 2}rem` }}
        >
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-black text-xl ">
                    이번 달 가장 식사자가 많은 날
                </div>
                <div className="flex w-14 h-6 rounded-sm justify-center items-center text-xs font-semibold bg-second text-white">
                    12일
                </div>
            </div>
            <div className="flex gap-5">
                <img
                    src="/assets/reversed_arrow.svg"
                    className="cursor-pointer w-5"
                    onClick={decreaseTime}
                />
                <Mealcard
                    time={time === 0 ? "아침" : time === 1 ? "점심" : "저녁"}
                    meal={meal?.menus ?? null}
                />
                <img
                    src="/assets/arrow.svg"
                    className="cursor-pointer w-5"
                    onClick={increaseTime}
                />
            </div>
            <div className="text-darkgrey text-base font-medium">
                전체 식사자 :{" "}
                <span className="font-bold">{meal ? meal?.eaterCount : 0}</span>
                명
            </div>
        </div>
    );
};

export default MuchTable;
