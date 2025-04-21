import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthMutation = () => {
    const navigate = useNavigate();
    const [isError, setError] = useState<boolean>(false);

    const mutationFn = async (stat: AuthResponse | null) => {
        if (stat?.res === 200) {
            navigate("/");
            setError(false);
        } else {
            console.log("인증 실패", stat);
            setError(true);
        }
    };

    return {
        mutationFn,
        isError,
    };
};
