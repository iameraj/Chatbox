import React, { useState, useEffect } from "react";
import "./pages.css";

const TARGET = "http://127.0.0.1:3002";
function ProfilePage() {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("User");

	useEffect(() => {
		// Fetch user data from the API
		const fetchData = async () => {
			try {
				const response = await fetch(TARGET + "/auth/whoami", {
					method: "GET",
					credentials: "include", // includes the cookies in the request
				});
				const data = await response.json();
				setUser(data.user);
				setUsername(data.user.username);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchData();
	}, []); // Run the effect only once on component mount

	// Set background color based on the user's themeColor
	const backgroundColor = user ? user.themeColor : "var(--color-two)";
	return (
		<div
			className="pages-container"
			style={{ backgroundColor: backgroundColor }}
		>
			<h2>Hi! {username}</h2>
			Lorem ipsum dolor sit amet, officia excepteur ex fugiat
			reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
			ex non excepteur duis sunt velit enim. Voluptate laboris sint
			cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
		</div>
	);
}

export default ProfilePage;
