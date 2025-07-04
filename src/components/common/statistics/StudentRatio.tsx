"use client";
import RatioBar from "./RatioBar";
import { useGetMealRate } from "@/hooks/home/useGetMealRate";
import { mealTypeMap, RateType } from "@/types/type/home/RateType";

const StudentRatio = () => {
    const { data: rate } = useGetMealRate();

    const getMealRatio = (mealType: string, grade: number): number => {
        const meal = rate?.find(
            (elem) => elem.mealType === mealTypeMap[mealType]
        );
        if (!meal) return 0;
        const value = Number(meal[`grade${grade}Ration` as keyof RateType]);
        return isNaN(value) ? 0 : value;
    };

    return (
        <div className="w-full px-7 py-5 bg-white flex flex-col items-center rounded-sm">
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-black text-xl ">
                    학년별 식사자 비율
                </div>
            </div>
            <div className="w-full flex justify-between">
                {[1, 2, 3].map((grade) => (
                    <div
                        className="flex flex-col items-center gap-5"
                        key={grade}
                    >
                        <div className="flex gap-10 items-end h-72">
                            {["아침", "점심", "저녁"].map((meal) => (
                                <RatioBar
                                    key={meal}
                                    focus={meal}
                                    percent={getMealRatio(meal, grade)}
                                />
                            ))}
                        </div>
                        <div className="text-black font-semibold text-base mt-2">
                            {grade}학년
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentRatio;
