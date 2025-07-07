"use client";
import { useEffect, useState } from "react";
import Checkbutton from "./CheckButton";
import Checklist from "./CheckList";
import { getEater } from "@/hooks/statistics/GetEater";
import { Eater } from "@/types/type/statistics/Eater";

const Checktable = () => {
    const [checkNum, setCheckNum] = useState<number>(1);
    const [eater, setEater] = useState<Eater[]>();

    useEffect(() => {
        const fetchEater = async () => {
            const data = await getEater(checkNum);
            setEater(data);
        };
        fetchEater();
    }, [checkNum]);

    return (
        <div
            className="w-full h-full px-7 py-5 bg-white flex flex-col items-center gap-6 rounded-sm overflow-y-auto"
            style={{ width: `${53.125 / 2 - 1.25 / 2}rem` }}
        >
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-black text-xl">
                    식사자 조회
                </div>
                <div className="flex gap-2">
                    {[1, 2, 3].map((id) => (
                        <Checkbutton
                            key={id}
                            id={id as 1 | 2 | 3}
                            checkNum={checkNum}
                            setCheckNum={setCheckNum}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full justify-between">
                {eater && eater.length > 0 ? (
                    eater.map((item) => (
                        <Checklist
                            key={item.eaterId}
                            id={item.eaterId}
                            name={item.user.realName}
                            number={item.user.studentId}
                            isEat={item.eaten}
                            grade={checkNum}
                        />
                    ))
                ) : (
                    <div className="text-base text-grey">
                        데이터가 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checktable;
