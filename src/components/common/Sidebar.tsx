'use client'

import { useCustomRouter } from "@/hooks/useCustomRouter";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const router = useCustomRouter();
    const pathname = usePathname();
    const condition = (currentPath: string) =>{
        return pathname === currentPath ? {backgroundColor : "#FE6B4B", color : "white"} : {background:"white", color:"#303030"}
    }

    return (
        <div className="w-52 h-96 p-4 bg-white flex flex-col gap-4 rounded-sm">
            {/* 홈 화면 */}
            <div onClick={()=>{router.push("/");}} className="w-full text-base pl-2 py-2 cursor-pointer" 
            style={condition("/")}>홈</div>
            {/* 음식 호불호 */}
            <div onClick={()=>{router.push("/likes");}} className="w-full text-base pl-2 py-2 cursor-pointer" 
            style={condition("/likes")}>음식 호불호</div>
            {/* 식사 통계 */}
            <div onClick={()=>{router.push("/statistics");}} className="w-full text-base pl-2 py-2 cursor-pointer" 
            style={condition("/statistics")}>식사 통계</div>
            {/* 급식표 & 알러지 */}
            <div onClick={()=>{router.push("/allergies");}} className="w-full text-base pl-2 py-2 cursor-pointer" 
            style={condition("/allergies")}>급식표 & 알러지</div>
            
            <div className="w-full border-t-1 py-4 border-t-grey">
                <div className="pl-2 text-main">로그아웃</div>
            </div>
        </div>
    );
};

export default Sidebar;
