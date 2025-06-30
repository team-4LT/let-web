import { LoginButtonProps } from "@/types/props/auth/loginButtonProps";

const LoginButton = ({ title, condition, onClick }: LoginButtonProps) => {
    return (
        <button
            className={`w-full h-10 bg-main text-white text-sm rounded-sm ${
                !condition ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => condition && onClick()}
            disabled={!condition}
        >
            {title}
        </button>
    );
};

export default LoginButton;