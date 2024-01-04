import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./ChatBox.css";
import FriendsPage from "../pages/FriendsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const ChatBox = ({ userId }) => {
	const [selectedPage, setSelectedPage] = useState("home");

	const renderPage = () => {
		switch (selectedPage) {
			case "friends":
				return <FriendsPage />;
			case "profile":
				return <ProfilePage />;
			default:
				return <HomePage />;
		}
	};
	return (
		<div className="chat-box-container">
			<Navbar onNavItemClicked={setSelectedPage} />
			<div className="chat-box-content">{renderPage()}</div>
		</div>
	);
};

export default ChatBox;
