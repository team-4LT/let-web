"use client";
import LoginButton from "@/components/common/auth/LoginButton";
import LoginInput from "@/components/common/auth/LoginInput";
import { useLogin } from "@/hooks/auth/useLogin";

const Login = () => {
  const { id, setId, pw, setPw, isError, login } = useLogin();
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white px-8 py-9 w-96 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-10">
          <img src="/assets/logo.svg" alt="사진 없음" className="w-24" />
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col gap-9 w-full ">
              <div className="flex flex-col gap-2 w-full">
                <div className="font-normal text-xs text-black">아이디</div>
                <LoginInput
                  placeholder="아이디를 입력하세요."
                  type="text"
                  text={id}
                  onChange={setId}
                  isError={isError}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-normal text-xs text-black">비밀번호</div>
                <LoginInput
                  placeholder="비밀번호를 입력하세요."
                  type="password"
                  text={pw}
                  onChange={setPw}
                  isError={isError}
                />
              </div>
            </div>
          </div>
          <LoginButton title="로그인" condition={!!(id.trim() && pw.trim())} onClick={login}/>
        </div>
      </div>
      <div className="text-sm absolute bottom-8 text-black font-light">
        Copyright 2025. ALT All rights reserved.
      </div>
    </div>
  );
};

export default Login;
