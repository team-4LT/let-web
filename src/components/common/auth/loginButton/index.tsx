import { LoginButtonProps } from "@/types/props/auth/loginButtonProps";
import React from "react";

const LoginButton = ({ title, condition }: LoginButtonProps) => {
    return (
        <div
            className={`w-full flex items-center justify-center py-2 h-10 text-white rounded-sm cursor-pointer text-base ${
                condition ? "bg-main" : "bg-gray"
            }`}
        >
            {title}
        </div>
    );
};

export default LoginButton;
