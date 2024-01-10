import express from "express";
const router = express.Router();

router.get("/list", async (req, res) => {
	// Implementation for viewing all friends
	try {
		const userObj = req.user;
		const friendList = userObj.friends;

		if (!friendList) {
			return res.status(200).json({ no_of_friends: "zero lol" });
		}
		return res.status(200).json({ friendIDs: friendList });
	} catch (error) {
		console.log("Internal server Error", error);
		return res.status(500).json({ error: "Internal Server Error Lol" });
	}
});

export default router;
