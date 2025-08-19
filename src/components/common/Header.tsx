"use client";
import { useRouter } from "next/navigation"; 
import { cookieManager } from "@/utilities/cookie";

const Header = () => {
    const router = useRouter();

    const toggleLogout = () =>{
        alert("로그아웃 되었습니다.")
        cookieManager.delete("ACCESS_TOKEN_KEY");
        cookieManager.delete("REFRESH_TOKEN_KEY");
        router.push("/login")
    }

    return (
        <div className="w-full bg-white border-b border-grey px-24 py-6 flex justify-between items-center fixed">
            <img src="/assets/logo.svg" className="w-17 cursor-pointer" onClick={() => { router.push("/"); }}/>
            <div className="pl-2 text-main cursor-pointer" onClick={toggleLogout}>로그아웃</div>
        </div>
    );
};

export default Header;
