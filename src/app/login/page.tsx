import LoginInput from "@/components/common/auth/loginInput";
import { useAuth } from "@/hooks/auth/useAuth";
import { useAuthMutation } from "@/queries/auth/auth";
import React from "react";

const Login = () => {
    const { id, setId, pw, setPw } = useAuth();
    const { isError } = useAuthMutation();
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-white px-[2.38rem] py-[1.88rem] w-[32rem] h-[38.6rem] flex flex-col items-center">
                <img src="../../assets/logo.svg" alt="사진 없음" />
                <div className="flex flex-col gap-[2.3rem] w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="font-normal text-[1.2rem]">로그인</div>
                        <LoginInput
                            placeholder="아이디를 입력하세요."
                            type="text"
                            text={id}
                            onChange={setId}
                            isError={isError}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-normal text-[1.2rem]">
                            비밀번호
                        </div>
                        <LoginInput
                            placeholder="비밀번호를 입력하세요."
                            type="text"
                            text={pw}
                            onChange={setPw}
                            isError={isError}
                        />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center py-[0.56rem] h-[3.5rem] text-white bg-gray rounded-[0.4rem] cursor-pointer text-[1.6rem]">
                    로그인
                </div>
            </div>
        </div>
    );
};

export default Login;
