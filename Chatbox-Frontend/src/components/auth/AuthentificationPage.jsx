import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthenticationPage = ({ onLoginSuccess }) => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const handleToggleForm = () => {
        setIsLoginFormVisible((prev) => !prev);
    };

    const handleLoginSuccess = () => {
        onLoginSuccess();
    };
    return (
        <div className="authentication-container">
            {isLoginFormVisible ? (
                <LoginForm
                    onSignupInsteadClick={handleToggleForm}
                    onLoginSuccess={handleLoginSuccess}
                />
            ) : (
                <SignupForm
                    onLoginInsteadClick={handleToggleForm}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
        </div>
    );
};

export default AuthenticationPage;
