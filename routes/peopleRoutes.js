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

export default router;
