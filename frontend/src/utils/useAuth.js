import { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                localStorage.removeItem("token");
            }
        }
    }, []);

    const storeToken = (token) => {
        localStorage.setItem("token", token);
        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            localStorage.removeItem("token");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const isAuthenticated = !!user;

    const value = { user, isAuthenticated, logout, storeToken };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
