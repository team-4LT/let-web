import { LoginInputProps } from "@/types/props/auth/loginInputProps";

const LoginInput = ({
    placeholder,
    text,
    type,
    onChange,
    isError,
}: LoginInputProps) => {
    return (
        <>
            <input
                className={`py-2 px-5 w-full h-[3.6rem] rounded-[0.4rem] border-[1px] text-[1.2rem] ${
                    isError ? "border-main" : "border-gray"
                }
                focus:outline-none focus:border-main`}
                type={type}
                placeholder={placeholder}
                value={text}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
};

export default LoginInput;
