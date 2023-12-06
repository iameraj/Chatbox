import { Schema, model } from "mongoose";

const chatSchema = new Schema({
	participants: [{ type: String, required: true }],
});

const Chat = model("Chat", chatSchema);

export default Chat;
