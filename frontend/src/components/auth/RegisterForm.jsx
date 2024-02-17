import { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { storeToken, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                credentials
            );
            const token = response.headers["x-auth-token"];
            if (token) {
                storeToken(token);
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="auth-form-container">
            <h1 className="auth-header">Register</h1>
            <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
