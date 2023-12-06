import React, { useState } from "react";
import "./LoginForm.css";
import { setCookie, removeCookie } from "../../utils/cookieFuncs";

const TARGET = "http://127.0.0.1:3002";

const LoginForm = ({ onSignupInsteadClick, onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(TARGET + "/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
                credentials: "include",
            });

            const data = await response.json();

            if (response.ok) {
                onLoginSuccess();

                const connectSidCookie = document.cookie
                    .split("; ")
                    .find((cookie) => cookie.startsWith("connect.sid="));

                if (connectSidCookie) {
                    removeCookie(connect.sid);
                    const connectSidValue = connectSidCookie.split("=")[1];
                    setCookie("connect.sid", connectSidValue);
                    console.log("cookie was set", connectSidCookie);
                } else {
                    console.log("Cookie not found");
                }

                console.log("Login successful", data.user);
            } else {
                console.error("Login failed", data.error);
            }
        } catch (error) {
            console.error("An error occurred during login", error);
        }
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
