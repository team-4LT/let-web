import React from "react";

const Sidebar = () => {
    return (
        <div className="w-53 p-4 bg-white flex flex-col gap-4 rounded-sm">
            <div className="w-full text-base text-black pl-2 py-2 cursor-pointer">홈</div>
            <div className="w-full text-base text-black pl-2 py-2 cursor-pointer">급식표</div>
            <div className="w-full text-base text-black pl-2 py-2 cursor-pointer">잔반 통계</div>
            <div className="w-full text-base text-black pl-2 py-2 cursor-pointer">식사 통계</div>
            <div className="w-full text-base text-black pl-2 py-2 cursor-pointer">알러지</div>
            <div className="w-full border-t-1 py-2 border-t-grey">
                <div className="pl-2 text-main">로그아웃</div>
            </div>
        </div>
    );
};

export default Sidebar;
