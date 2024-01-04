import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ onNavItemClicked }) {
	const [activePage, setActivePage] = useState("home");

	const handleNavItemClick = (page) => {
		onNavItemClicked(page);
		setActivePage(page);
	};

	return (
		<div className="navbar-container">
			<div className="navbar">
				<div
					className={`nav-item ${
						activePage === "home" ? "active" : ""
					}`}
					onClick={() => handleNavItemClick("home")}
				>
					<strong>Home</strong>
				</div>
				<div
					className={`nav-item ${
						activePage === "friends" ? "active" : ""
					}`}
					onClick={() => handleNavItemClick("friends")}
				>
					<strong>Friends</strong>
				</div>
				<div
					className={`nav-item ${
						activePage === "profile" ? "active" : ""
					}`}
					onClick={() => handleNavItemClick("profile")}
				>
					<strong>Profile</strong>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
