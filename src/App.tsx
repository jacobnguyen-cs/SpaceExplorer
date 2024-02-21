import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/auth/AuthProvider";
import Login from "./components/login/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Login />
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
