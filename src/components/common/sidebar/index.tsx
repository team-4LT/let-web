'use client'

import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="w-53 h-96 p-4 bg-white flex flex-col gap-4 rounded-sm">
            <div className="w-full text-base pl-2 py-2 cursor-pointer" 
            style={pathname === "/" ? {backgroundColor : "#FE6B4B", color : "white"} : {background:"white", color:"#303030"}}>홈</div>
            <div className="w-full text-base pl-2 py-2 cursor-pointer bg-white text-black">급식표</div> {/*이거도 파라미터 값 정하면 위에 홈처럼*/}
            <div className="w-full text-base pl-2 py-2 cursor-pointer bg-white text-black">잔반 통계</div>
            <div className="w-full text-base pl-2 py-2 cursor-pointer bg-white text-black">식사 통계</div>
            <div className="w-full text-base pl-2 py-2 cursor-pointer bg-white text-black">알러지</div>
            <div className="w-full border-t-1 py-4 border-t-grey">
                <div className="pl-2 text-main">로그아웃</div>
            </div>
        </div>
    );
};

export default Sidebar;
