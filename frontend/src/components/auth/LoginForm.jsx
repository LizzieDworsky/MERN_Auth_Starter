import { useState } from "react";
import { useAuth } from "../../utils/useAuth";

const LoginForm = () => {
    const { storeToken, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div className="auth-form-container">
            <h1 className="auth-header">Login</h1>
            <form className="auth-form">
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
