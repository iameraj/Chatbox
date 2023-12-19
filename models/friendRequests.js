import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema({
	sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	timestamp: { type: Date, default: Date.now },
});

const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);

export default FriendRequest;
