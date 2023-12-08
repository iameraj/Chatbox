import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	friends: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		default: [],
	},
});

userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next();
		}
		const hashedPassword = await hash(this.password, 10);
		this.password = hashedPassword;
		next();
	} catch (error) {
		next(error);
	}
});

const User = model("User", userSchema);

userSchema.methods.addFriend = async function (friendId) {
	if (!this.friends) {
		this.friends = [];
	}
	if (!this.friends.includes(friendId)) {
		this.friends.push(friendId);
		await this.save();
	}
};

export default User;
