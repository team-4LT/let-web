"use client";
import { useState } from "react";
import Checkbutton from "./CheckButton";
import Checklist from "./CheckList";

const Checktable = () => {
    const [checkNum, setCheckNum] = useState<number>(0);
    return (
        <div
            className="w-full h-full px-7 py-5 bg-white flex flex-col items-center gap-6 rounded-sm"
            style={{ width: `${53.125 / 2 - 1.25 / 2}rem` }}
        >
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-black text-xl ">
                    식사자 조회
                </div>
                {/* 1, 2, 3학년 필터 */}
                <div className="flex gap-2">
                    {[1, 2, 3].map((id) => (
                        <Checkbutton
                            key={id}
                            id={id as 0 | 1 | 2}
                            checkNum={checkNum}
                            setCheckNum={setCheckNum}
                        />
                    ))}
                </div>
            </div>
            <Checklist />
        </div>
    );
};

export default Checktable;
