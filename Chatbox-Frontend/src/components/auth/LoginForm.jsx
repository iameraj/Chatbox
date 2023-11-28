import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onSignupInsteadClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: Perform login logic here
        console.log("Logging in with:", { username, password });
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
            <p className="signup-instead" onClick={onSignupInsteadClick}>
                Don't have account? Singup instead
            </p>
        </div>
    );
};

export default LoginForm;
