import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}
