import axios from "axios";
import { useState } from "react";

export const useAuth = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const login = async () => {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/어쩌구`,
            {
                id: id,
                pw: pw,
            }
        );
    };
    return { id, setId, pw, setPw, login };
};
