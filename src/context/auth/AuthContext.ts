import { createContext } from "react";

interface AuthData {
    token: string;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthData>({
    token: "",
    login: () => {},
    logout: () => {},
});
