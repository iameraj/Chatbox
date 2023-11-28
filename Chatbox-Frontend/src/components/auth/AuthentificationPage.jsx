import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthenticationPage = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const handleToggleForm = () => {
        setIsLoginFormVisible((prev) => !prev);
    };

    return (
        <div className="authentication-container">
            {isLoginFormVisible ? (
                <LoginForm onSignupInsteadClick={handleToggleForm} />
            ) : (
                <SignupForm onLoginInsteadClick={handleToggleForm} />
            )}
        </div>
    );
};

export default AuthenticationPage;
