import customAxios from "@/libs/axios/customAxios";
import { cookieManager } from "@/utilities/cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    const loginData = {
        username: id,
        password: pw,
    };

    const login = async () => {
        try {
            const res = await customAxios.post(`/auth/login`, loginData);
            if (res) {
                if (res?.data.res === 200) {
                    router.push("/");
                    setError(false);
                    alert("로그인 완료.");
                    const newAccessToken = res.data.accessToken;
                    const newRefreshToken = res.data.refreshToken;
                    await cookieManager.set("ACCESS_TOKEN_KEY", newAccessToken);
                    await cookieManager.set(
                        "REFRESH_TOKEN_KEY",
                        newRefreshToken
                    );
                } else {
                    console.log("인증 실패", res);
                    setError(true);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    return { id, setId, pw, setPw, login, isError };
};
