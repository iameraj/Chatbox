import express from "express";
import Chat from "../models/chat.js";
const router = express.Router();

router.post("/send", async (req, res) => {
	try {
		const senderId = req.user._id;
		const { receiverId, message } = req.body;

		if (!receiverId) {
			return res
				.status(400)
				.json({ error: "Receiver ID is required in the request body" });
		}

		// Check if the
		// sender already has a chat thread with receiver
		// if yes;
		//  then we will append the message to that chat
		// if no;
		//  then we will get a new chat thread and append the message
		//  to that chat

		const query = Chat.where({
			$or: [
				{ sender: senderId, receiver: receiverId },
				{ sender: receiverId, receiver: senderId },
			],
		});
		let existingChat = await query.findOne();

		if (!existingChat) {
			console.log("Creating New Chat");
			existingChat = new Chat({
				sender: senderId,
				receiver: receiverId,
				messages: [],
			});
			console.log("New chat properly created...");
		} else {
			console.log("Older Chat thread was found");
		}

		const newMessage = {
			sender: senderId,
			message: message,
			timestamp: new Date(),
		};

		existingChat.messages.push(newMessage);
		const savedChat = await existingChat.save();
		res.status(200).json(savedChat);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
