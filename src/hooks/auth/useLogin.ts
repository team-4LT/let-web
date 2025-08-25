import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token";
import customAxios from "@/libs/axios/customAxios";
import { cookieManager } from "@/utilities/cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async () => {
        const loginData = {
            username: id.trim(),
            password: pw.trim(),
        };
        try {
            setIsLoading(true);
            const res = await customAxios.post(`/auth/login`, loginData);
            if (res) {
                setIsLoading(false);
                if (res?.status === 200 || res?.status === 201) {
                    router.push("/");
                    setError(false);
                    alert("로그인 완료.");
                    await cookieManager.set(
                        ACCESS_TOKEN_KEY,
                        res.data.data.accessToken
                    );
                    await cookieManager.set(
                        REFRESH_TOKEN_KEY,
                        res.data.data.refreshToken
                    );
                } else {
                    console.log("인증 실패", res);
                    setError(true);
                }
            }
        } catch (error) {
            console.error(error);
            setError(true);
            alert("아이디와 비밀번호를 확인해주십시오.");
        }
        setIsLoading(false);
    };
    return { id, setId, pw, setPw, login, isError, isLoading, setIsLoading };
};
