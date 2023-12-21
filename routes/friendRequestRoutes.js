import express from "express";
import User from "../models/user.js";
import FriendRequest from "../models/friendRequests.js";
const router = express.Router();

router.post("/send", async (req, res) => {
	// Implementation for sending a friend request
	try {
		const { friendId } = req.body;
		const userId = req.user._id;

		if (!friendId) {
			return res
				.status(400)
				.json({ error: "Friend ID is required in the request body" });
		}

		// Check if the friend request has not been sent already
		const existingRequest = await FriendRequest.findOne({
			sender: userId,
			receiver: friendId,
		});

		if (existingRequest) {
			return res
				.status(400)
				.json({ error: "Friend request already sent" });
		}

		// Create a new friend request
		await FriendRequest.create({
			sender: userId,
			receiver: friendId,
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Internal Server Error", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

router.post("/accept", async (req, res) => {
	// Implementation for accepting a friend request
	try {
		const userObj = req.user;
		const { friendId } = req.body;

		if (!friendId) {
			return res
				.status(400)
				.json({ error: "Friend ID is required in the request body" });
		}
		const friendObj = await User.findById(friendId);
		if (!friendObj) {
			return res.status(400).json({ error: "Friend Id is Invalid" });
		}
		await userObj.addFriend(friendId);
		await friendObj.addFriend(friendId);

		return res.status(200).json({ success: true });
	} catch (error) {
		console.log("Internal server Error", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/view", async (req, res) => {
	// Implementation for viewing friends
	try {
		const userObj = req.user;
		const friendRequests = await FriendRequest.find({
			receiver: userObj,
		});

		return res.status(200).json(friendRequests);
	} catch (error) {
		console.log("Internal server Error", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

export default router;
