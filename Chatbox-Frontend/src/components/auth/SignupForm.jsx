import React, { useState } from "react";
import "./SignupForm.css";

const TARGET = "http://127.0.0.1:3002";

function SignupForm({ onLoginInsteadClick }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			if (!(password === password2)) {
				new Error("Passwords dont match");
			}
			const response = await fetch(TARGET + "/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({
					username,
					password,
				}),
			});

			if (response.ok) {
				console.log("Signup successful!");
			} else {
				console.error("Signup failed.");
			}
		} catch (error) {
			console.error("Error during signup:", error);
		}
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
}

export default SignupForm;
