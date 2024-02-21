import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/auth/AuthContext";

export default function Login() {
    const [token, setToken] = useState("");
    const auth = useContext(AuthContext);

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        auth.login(token);
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label>
                    Authorization Token:
                    <input
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
