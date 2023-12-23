import { Schema, model } from "mongoose";

const messageSchema = new Schema({
	sender: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const chatSchema = new Schema({
	time: {
		type: Date,
		default: Date.now,
	},
	sender: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	receiver: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	messages: {
		type: [messageSchema],
		default: [],
	},
});

const Chat = model("Chat", chatSchema);

export default Chat;
