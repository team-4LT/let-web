import { LoginButtonProps } from "@/types/props/auth/loginButtonProps";

const LoginButton = ({ title, condition }: LoginButtonProps) => {
  return (
    <div
      className={`w-full flex items-center justify-center py-2 h-10 text-white rounded-sm cursor-pointer text-base ${
        condition ? "" : "bg-grey"
      }`}
      style={
        condition
          ? {
              background: "linear-gradient(180deg, #FF3939 0%, #FF8957 100%)",
            }
          : undefined
      }
    >
      {title}
    </div>
  );
};

export default LoginButton;
