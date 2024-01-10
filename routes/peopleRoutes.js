import express from "express";
import User from "../models/user.js";
const router = express.Router();

// List of all users
router.get("/everyone", async (_req, res) => {
	try {
		const users = await User.find({}, "username _id");
		return res.status(200).json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

router.post("/getpic", async (req, res) => {
	// Implementation for generating profile pic
	try {
		const user = req.user;
		await user.addProfilePicture();

		return res.status(200).json({ success: true, user: user });
	} catch (error) {
		console.log("Internal server Error", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/who/:userId", async (req, res) => {
	const requestedUserId = req.params.userId;

	const user = await User.findById(requestedUserId);

	if (user) {
		const userSubset = {
			username: user.username,
			profilePicture: user.profilePicture,
		};

		res.status(200).json({ user: userSubset });
	} else {
		res.status(404).json({ message: "User not found" });
	}
});
export default router;
