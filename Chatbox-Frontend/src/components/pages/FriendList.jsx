import React, { useEffect, useState } from "react";
import "./pages.css";

const TARGET = "http://127.0.0.1:3002";
const FriendList = () => {
	const [friendIDs, setFriendIDs] = useState([]);

	useEffect(() => {
		const fetchFriendIds = async () => {
			try {
				const response = await fetch(TARGET + "/friends/list", {
					method: "GET",
					credentials: "include", // includes the cookies in the request
				});
				const data = await response.json();
				setFriendIDs(data.friendIDs);
			} catch (error) {
				console.error("Error fetching friend IDs:", error);
			}
		};

		fetchFriendIds();
	}, []);

	const FriendItem = ({ friendId }) => {
		const [friendInfo, setFriendInfo] = useState({});

		useEffect(() => {
			const fetchFriendInfo = async () => {
				try {
					const response = await fetch(TARGET + `/who/${friendId}`);
					const data = await response.json();
					setFriendInfo(data.user);
				} catch (error) {
					console.error(
						`Error fetching friend info for ID ${friendId}:`,
						error,
					);
				}
			};

			fetchFriendInfo();
		}, [friendId]);

		return (
			<div
				className="friend-item"
				style={{
					backgroundColor: `${backgroundColor(
						friendInfo.themeColor,
					)}`,
				}}
			>
				<img src={friendInfo.profilePicture} alt="Profile" />
				<span>
					<strong>{friendInfo.username}</strong>
				</span>
			</div>
		);
	};

	return (
		<div className="friend-list-container">
			{friendIDs.map((friendId) => (
				<FriendItem key={friendId} friendId={friendId} />
			))}
		</div>
	);
};
function backgroundColor(hexColor) {
	try {
		// Convert hex to RGB
		const hexToRgb = (hex) => ({
			r: parseInt(hex.substring(1, 3), 16),
			g: parseInt(hex.substring(3, 5), 16),
			b: parseInt(hex.substring(5, 7), 16),
		});

		// Convert RGB to hex
		const rgbToHex = (r, g, b) =>
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

		// Calculate darker color
		const darkenColor = (color) => Math.round(color * 0.7);

		// Get RGB values
		const { r, g, b } = hexToRgb(hexColor);

		// Darken the color slightly
		const darkerR = darkenColor(r);
		const darkerG = darkenColor(g);
		const darkerB = darkenColor(b);

		// Calculate darker background color
		const darkerBackgroundColor = rgbToHex(darkerR, darkerG, darkerB);

		return darkerBackgroundColor;
	} catch {
		return "#161616";
	}
}

export default FriendList;
