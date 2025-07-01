import { EaterProps } from "@/types/props/statistics/EaterProps";

const Checklist = ({ id, name, isEat, grade, number }: EaterProps) => {
    return (
        <div className="w-full flex-col">
            <div className="w-full flex justify-between border-t border-grey pt-2.5 pb-2.5">
                <div className="text-black text-base">{grade}반</div>
                <div className="text-black text-base">{number}번</div>
                <div className="text-black text-base">{name}</div>
                <div className="text-base font-medium" style={isEat ? {color:"#888888"} : {color:"#FE6B4B"}}>
                    {isEat ? "식사 완료" : "식사 미완료"}
                </div>
            </div>
        </div>
    );
};

export default Checklist;
