import { useState, useEffect, useContext, ReactElement } from "react";

import { AuthContext } from "../auth/AuthContext";
import { ApiContext } from "./ApiContext";
import SpaceTradersApi from "../../api/SpaceTradersApi";
import { Ship } from "../../models/Ship";

interface ApiProviderProps {
    children: ReactElement;
}

export default function ApiProvder(props: ApiProviderProps) {
    const authContext = useContext(AuthContext);

    const [ships, setShips] = useState<Ship[]>([]);

    useEffect(() => {
        async (): Promise<void> => {
            try {
                const response = await SpaceTradersApi.getShips(
                    authContext.token
                );
                setShips(response);
            } catch (error) {
                console.log(error);
                throw error;
            }
        };
    }, []);

    return (
        <ApiContext.Provider value={{ ships }}>
            {props.children}
        </ApiContext.Provider>
    );
}
