// AuthenticationPage.jsx

import React, { useState } from "react";
import LoginForm from "./LoginForm"; // Assuming you have a LoginForm component
import SignupForm from "./SignupForm"; // Assuming you have a SignupForm component

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
