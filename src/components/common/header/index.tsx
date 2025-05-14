"use client";
import { useRouter } from "next/navigation"; 

const Header = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-white border-b border-grey px-24 py-6 flex justify-between items-center">
            <img src="/assets/logo.svg" className="w-17 cursor-pointer" onClick={() => { router.push("/"); }}/>
            <div className="text-black text-lg font-[500]">밥묵짜 선생님</div>
        </div>
    );
};

export default Header;
