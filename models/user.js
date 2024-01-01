import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	friends: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		default: [],
	},
	themeColor: { type: String, default: getRandomHexColor },
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
	if (!this.themeColor) {
		this.themeColor = getRandomHexColor();
	}
});

userSchema.methods.addFriend = async function (friendId) {
	if (!this.friends) {
		this.friends = [];
	}
	if (!this.friends.includes(friendId)) {
		this.friends.push(friendId);
		await this.save();
	}
};

const User = model("User", userSchema);

export default User;

// Returns a random color to assign as user theme...
function getRandomHexColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
