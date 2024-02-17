import { useState } from "react";

import { useAuth } from "../../utils/useAuth";

const RegisterForm = () => {
    const { storeToken } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div className="auth-form-container">
            <h1 className="auth-header">Register</h1>
            <form
                className="auth-form"
                // onSubmit={handleSubmit}
            >
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
