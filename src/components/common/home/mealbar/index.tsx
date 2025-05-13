import { MealTime } from "@/hooks/mealbar/mealTime";

const Mealbar = () => {
    const {condition} = MealTime();

    return (
        <div className="w-full bg-white h-16 px-5 py-3.5 flex items-center rounded-sm">
            <div className="flex gap-2 w-64 items-center">
                {/* 아침 점심 저녁 이미지 달라지게 하기 */}
                <img src={condition === "breakfast" ? "/assets/morning.svg" : condition === "lunch" ? "/assets/afternoon.svg" : "/assets/night.svg"} className="w-7" />
                <div className="text-base text-black font-semibold">오늘의 {condition === "breakfast" ? "아침" : condition === "lunch" ? "점심" : "저녁"}</div>
            </div>
            <div className="w-2xs text-placeholder font-normal text-right text-sm">
                백미밥, 조랭이떡국, 구름치즈찜닭, 집게맛살튀김, 오이 겉절이,
                배추김치
            </div>
        </div>
    );
};

export default Mealbar;
