import { Schema, model } from "mongoose";
import generateProfilePicture from "../utils/profilePictureGenerator.js";
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
	profilePicture: { data: Buffer, type: String },
});

userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) {
			return next();
		}
		const hashedPassword = await hash(this.password, 10);
		this.password = hashedPassword;
		if (!this.themeColor) {
			this.themeColor = getRandomHexColor();
			next();
		}
		this.profilePicture = await generateProfilePicture(
			this.username,
			this.themeColor,
		);
		next();
	} catch (error) {
		next(error);
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

userSchema.methods.addProfilePicture = async function () {
	try {
		if (!this.profilePicture) {
			this.profilePicture = "";
		}
		this.profilePicture = await generateProfilePicture(
			this.username,
			this.themeColor,
		);
		await this.save();
	} catch (error) {
		console.error("Error in addProfilePicture:", error);
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
