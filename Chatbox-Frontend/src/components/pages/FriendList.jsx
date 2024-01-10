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
			<div className="friend-item">
				<img src={friendInfo.profilePicture} alt="Profile" />
				<span>
					<strong>{friendInfo.username}</strong>{" "}
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

export default FriendList;
