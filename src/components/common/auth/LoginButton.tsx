import { LoginButtonProps } from "@/types/props/auth/loginButtonProps";

const LoginButton = ({ title, condition, onClick, isLoading }: LoginButtonProps) => {
    return (
        <button
            className={`cursor-pointer w-full h-10 bg-main text-white text-sm rounded-sm ${
                !condition ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => condition && onClick()}
            disabled={!condition}
        >
            {isLoading ? "로딩 중..." : title}
        </button>
    );
};

export default LoginButton;