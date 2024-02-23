import { useContext, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/auth/AuthContext";

interface RequireAuthProps {
    children: ReactElement;
}

export default function RequireAuth(props: RequireAuthProps) {
    const authContext = useContext(AuthContext);

    return authContext.isLogged === false ? (
        <Navigate to="/login" />
    ) : (
        props.children
    );
}
