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
                className={`py-2 px-3.5 w-full h-9 rounded-sm border-1 text-xs ${
                    isError ? "border-main" : "border-grey"
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
