import React, { useState, useEffect } from "react";
import "./pages.css";

const TARGET = "http://127.0.0.1:3002";
function ProfilePage() {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("User");
	const [image, setImage] = useState(null);

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
				setImage(data.user.profilePicture);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchData();
	}, []); // Run the effect only once on component mount

	// Set background color based on the user's themeColor
	return (
		<div className="pages-container">
			{image && (
				<div
					style={{
						width: "100px", // Set your desired width and height
						height: "100px",
						borderRadius: "50%",
						overflow: "hidden",
					}}
				>
					<img
						src={image}
						alt="ProfilePicture"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
			)}
			<h2>Hi! {username}</h2>
			Lorem ipsum dolor sit amet, officia excepteur ex fugiat
			reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
			ex non excepteur duis sunt velit enim. Voluptate laboris sint
			cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
		</div>
	);
}

export default ProfilePage;
