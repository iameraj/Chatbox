// SignupForm.jsx

import React, { useState } from "react";
import "./SignupForm.css"; // Assuming you have a separate CSS file for styling

const SignupForm = ({ onLoginInsteadClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        // Perform signup logic here (e.g., send data to server, create user)
        console.log("Signing up with:", { username, password });
    };

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSignup}>
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
                <label htmlFor="password2">Confirm Password:</label>
                <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />

                <button type="submit">Signup</button>
            </form>

            <p className="login-instead" onClick={onLoginInsteadClick}>
                Already have an account? Login instead
            </p>
        </div>
    );
};

export default SignupForm;
