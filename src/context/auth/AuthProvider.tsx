import { useState, ReactElement } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "./AuthContext";
import SpaceTradersApi from "../../api/SpaceTradersApi";

interface AuthProviderProps {
    children: ReactElement;
}

export default function AuthProvider(props: AuthProviderProps) {
    const [token, setToken] = useState<string>(
        localStorage.getItem("authToken") ?? ""
    );

    const navigate = useNavigate();

    async function login(token: string): Promise<void> {
        try {
            const response = await SpaceTradersApi.getAgent(token);
            if (response) {
                localStorage.setItem("authToken", token);
                setToken(token);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function logout(): void {
        setToken("");
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}
