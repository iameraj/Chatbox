import React, { useState, useEffect } from "react";
import "./pages.css";

const TARGET = "http://127.0.0.1:3002";
function ProfilePage() {
	const [username, setUsername] = useState("User");
	const [email, setEmail] = useState("Not provided");
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
				setUsername(data.user.username);
				setEmail(data.user.email);
				setImage(data.user.profilePicture);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchData();
	}, []); // Run the effect only once on component mount

	return (
		<div className="pages-container">
			<div style={{ display: "flex", alignItems: "center" }}>
				{image && (
					<div
						style={{
							width: "100px", // Set your desired width and height
							height: "100px",
							borderRadius: "50%",
							overflow: "hidden",
							margin: "10px",
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
				<div className="profileDetails">
					{username} <br></br>
					<small>{email}</small>
				</div>
			</div>
			<hr></hr>
			Lorem ipsum dolor sit amet, officia excepteur ex fugiat
			reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
			ex non excepteur duis sunt velit enim. Voluptate laboris sint
			cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
		</div>
	);
}

export default ProfilePage;
