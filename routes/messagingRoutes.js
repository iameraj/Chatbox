import express from "express";
import Chat from "../models/chat.js";
import User from "../models/user.js";
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
		const receiver = await User.findById(receiverId);
		if (!receiver) {
			return res.status(400).json({ error: "Invalid Receiver-Id" });
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

router.get("/getChat", async (req, res) => {
	try {
		const senderId = req.user._id;
		const { receiverId } = req.body;

		if (!receiverId) {
			return res
				.status(400)
				.json({ error: "Receiver ID is required in the request body" });
		}

		const query = Chat.where({
			$or: [
				{ sender: senderId, receiver: receiverId },
				{ sender: receiverId, receiver: senderId },
			],
		});
		let existingChat = await query.findOne();

		if (!existingChat) {
			res.status(404).json({ message: "No chats were found" });
		} else {
			console.log("Older Chat thread was found");
			res.status(200).json(existingChat);
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/sendToChat", async (req, res) => {
	try {
		const senderId = req.user._id;
		const { chatId, message } = req.body;

		if (!chatId) {
			return res
				.status(400)
				.json({ error: "ChatID is required in the request body" });
		}

		let existingChat = await Chat.findById(chatId);

		if (!existingChat) {
			return res.status(404).json({ message: "No chats were found" });
		} else {
			console.log("Older Chat thread was found");
		}

		const newMessage = {
			sender: senderId,
			message: message,
			timestamp: new Date(),
		};

		existingChat.messages.push(newMessage);
		await existingChat.save();
		res.status(201).json();
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
