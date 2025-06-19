import { CheckButtonProps } from "@/types/props/statistics/checkButtonProps";

const Checkbutton = ({ id, checkNum, setCheckNum }: CheckButtonProps) => {
    return (
        <div
            className="flex w-14 h-6 rounded-sm justify-center items-center text-xs cursor-pointer font-semibold"
            style={
                checkNum === id
                    ? { background: "#FE6B4B", color: "white" }
                    : { background: "#EFEFEF", color: "#303030" }
            }
            onClick={() => setCheckNum(id)}
        >
            {id === 0 ? "전체" : `${id}학년`}
        </div>
    );
};

export default Checkbutton;
