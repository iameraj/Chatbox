import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ChatBox from "./components/chat/ChatBox";
import AuthenticationPage from "./components/auth/AuthentificationPage";
import ReactLoading from "react-loading";
import React, { useState, useEffect } from "react";

const TARGET = "http://127.0.0.1:3002";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const checkAuthenticationStatus = async () => {
			try {
				setIsLoading(true);
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
				setIsLoading(false);
			} catch (error) {
				console.error(
					"Error checking authentication status lol:",
					error,
				);
				setIsLoading(false);
			}
		};

		checkAuthenticationStatus();
	}, []);

	const handleLoginSuccess = async () => {
		try {
			setIsLoading(true);
			const respose = await fetch(TARGET + "/auth/whoami", {
				method: "GET",
				credentials: "include",
			});

			if (respose.ok) {
				const data = await respose.json();
				setUserId(data.user.username);
				setLoggedIn(true);
			}
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching user data", error);
		}
	};

	while (isLoading) {
		return (
			<div className="container">
				<ReactLoading type="cylon" height={300} width={300} />
			</div>
		);
	}
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
