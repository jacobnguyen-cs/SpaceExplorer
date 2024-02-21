import { createContext } from "react";

interface data {
    token: string;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<data>({
    token: "",
    login: () => {},
    logout: () => {},
});
