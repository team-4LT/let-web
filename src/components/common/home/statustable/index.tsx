import { useMealTime } from "@/hooks/mealbar/useMealTime";

const Statustable = () => {
    const { condition } = useMealTime();
    return (
        <div className="w-fill h-35 p-5 bg-white flex flex-col rounded-sm">
            <div className="w-fill flex justify-between items-center">
                <div className="font-semibold text-black text-base">
                    식사자 현황
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="text-grey font-semibold text-xs cursor-pointer">
                        바로 가기
                    </div>
                    <img src="/assets/arrow.svg" className="w-2" />
                </div>
            </div>
            <div className="text-center text-darkgrey text-sm py-6">
                {condition}을 거른 사람이
                <br />
                <span className="font-bold">
                    총 85명{" "}
                </span>
                있습니다.
            </div>
        </div>
    );
};

export default Statustable;
