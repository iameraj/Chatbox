import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ChatBox from "./components/chat/ChatBox";
import AuthenticationPage from "./components/auth/AuthentificationPage";
import React, { useState, useEffect } from "react";

const TARGET = "http://127.0.0.1:3002";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const checkAuthenticationStatus = async () => {
			try {
				const response = await fetch(TARGET + "/auth/whoami", {
					method: "GET",
					credentials: "include", // includes the cookies in the request
				});

				if (response.ok) {
					const data = await response.json();
					setUserId(data.user.username);
					setLoggedIn(true);
				} else {
					setLoggedIn(false);
				}
			} catch (error) {
				console.error(
					"Error checking authentication status lol:",
					error,
				);
			}
		};

		checkAuthenticationStatus();
	}, []);

	const handleLoginSuccess = () => {
		setLoggedIn(true);
	};

	return (
		<>
			<Header />
			<div className="container">
				{loggedIn ? (
					<ChatBox userId={userId} />
				) : (
					<AuthenticationPage onLoginSuccess={handleLoginSuccess} />
				)}
			</div>
			<Footer />
		</>
	);
}
export default App;
