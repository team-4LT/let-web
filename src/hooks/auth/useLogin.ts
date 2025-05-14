import { cookieManager } from "@/utilities/cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    
    const login = async () => {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            {
                id: id,
                pw: pw,
            }
        );
        if (data) {
            if (data?.data.res === 200) {
                router.push("/");
                setError(false);
                alert("로그인 완료.");
                const newAccessToken = data.data.accessToken;
                const newRefreshToken = data.data.refreshToken;
                await cookieManager.set("ACCESS_TOKEN_KEY", newAccessToken);
                await cookieManager.set("REFRESH_TOKEN_KEY", newRefreshToken);
            } else {
                console.log("인증 실패", data);
                setError(true);
            }
        } else {
            console.log("데이터가 없습니다.");
        }
    };
    return { id, setId, pw, setPw, login, isError };
};
