import { createContext } from "react";

import { Ship } from "../../models/Ship";

interface ApiData {
    ships: Ship[];
}

export const ApiContext = createContext<ApiData>({
    ships: [],
});
