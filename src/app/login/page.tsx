"use client";
import LoginButton from "@/components/common/auth/loginButton";
import LoginInput from "@/components/common/auth/loginInput";
import { useLogin } from "@/hooks/auth/useLogin";
import React from "react";

const Login = () => {
    const { id, setId, pw, setPw, isError } = useLogin();
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-white px-[3rem] py-[3.8rem] w-[32rem] flex flex-col items-center">
                <div className="w-full flex flex-col items-center gap-[4rem]">
                    <img
                        src="/assets/logo.svg"
                        alt="사진 없음"
                        className="w-[9.2rem]"
                    />
                    <div className="flex flex-col items-start gap-[0.8rem] w-full">
                        <div className="flex flex-col gap-[2.3rem] w-full ">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="font-normal text-[1.2rem] text-black">
                                    아이디
                                </div>
                                <LoginInput
                                    placeholder="아이디를 입력하세요."
                                    type="text"
                                    text={id}
                                    onChange={setId}
                                    isError={isError}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-normal text-[1.2rem] text-black">
                                    비밀번호
                                </div>
                                <LoginInput
                                    placeholder="비밀번호를 입력하세요."
                                    type="password"
                                    text={pw}
                                    onChange={setPw}
                                    isError={isError}
                                />
                            </div>
                        </div>
                        {/* <label className="flex gap-[0.8rem] cursor-pointer items-center">
                            <input
                                type="checkbox"
                                onClick={() => setSave((prev) => !prev)}
                                checked={isSave}
                            />
                            <div className="text-[1.2rem] text-gray font-normal">
                                자동 로그인
                            </div>
                        </label> */}
                    </div>
                    <LoginButton title="로그인" condition={id && pw} />
                </div>
            </div>
            <div className="text-[1.6rem] absolute bottom-[3rem] text-gray font-normal">
                Copyright 2025. ALT All rights reserved.
            </div>
        </div>
    );
};

export default Login;
