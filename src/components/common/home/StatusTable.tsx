"use client";

import { getNotEater } from "@/hooks/home/GetNotEater";
import { useMealTime } from "@/hooks/mealbar/useMealTime";
import { useEffect, useState } from "react";

const Statustable = () => {
    const { condition } = useMealTime();
    const [status, setStatus] = useState();

    useEffect(() => {
        const fetchStatus = async () => {
            const res = await getNotEater();
            if (res && res.data !== undefined) {
                setStatus(res.data);
            }
        };
        fetchStatus();
    }, []);

    return (
        <div className="w-fill h-35 p-5 bg-white flex flex-col rounded-sm">
            <div className="w-fill flex justify-between items-center">
                <div className="font-semibold text-black text-base">
                    식사자 현황
                </div>
            </div>
            <div className="text-center text-darkgrey text-sm py-6">
                {condition}을 거른 사람이
                <br />
                <span className="font-bold">총 {status}명 </span>
                있습니다.
            </div>
        </div>
    );
};

export default Statustable;
