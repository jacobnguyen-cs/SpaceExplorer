import axios, { AxiosResponse } from "axios";

import { Success } from "../models/Api";
import { Agent } from "../models/Agent";
import { Ship } from "../models/Ship";

export default class SpaceTradersApi {
    static async getAgent(token: string): Promise<Agent> {
        try {
            const response = await SpaceTradersApi.get(
                "https://api.spacetraders.io/v2/my/agent",
                token
            );

            return response?.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async getShips(token: string): Promise<Ship[]> {
        try {
            const response = await SpaceTradersApi.get(
                "https://api.spacetraders.io/v2/my/ships",
                token
            );

            return response?.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async get(url: string, token?: string | null): Promise<Success> {
        const options = {
            method: "GET",
            url: url,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const { data } = await axios.request(options);

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
