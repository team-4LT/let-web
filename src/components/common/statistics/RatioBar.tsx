import { RatioBarProps } from "@/types/props/statistics/ratioBarProps";

const RatioBar = ({ percent, focus }: RatioBarProps) => {
    return (
        <div className="flex flex-col gap-3.5 items-center">
            <div className="font-semibold text-base text-black">{percent}%</div>
            <div
                className="w-12 rounded-tl-sm rounded-tr-sm"
                style={{
                    height: `${percent / 9}rem`,
                    backgroundColor: `${
                        focus === "아침"
                            ? "#FF3939"
                            : focus === "점심"
                            ? "#FE6B4B"
                            : "#FE8856"
                    }`,
                }}
            />
            <div className="font-normal text-base text-black">{focus}</div>
        </div>
    );
};

export default RatioBar;
