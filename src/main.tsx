import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "./components/auth/RequireAuth.tsx";
import Login from "./components/login/Login";
import { ApiContext } from "./context/api/ApiContext.ts";
import AuthProvider from "./context/auth/AuthProvider.tsx";
import ApiProvder from "./context/api/ApiProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ApiProvder>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <App />
                                </RequireAuth>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </ApiProvder>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
