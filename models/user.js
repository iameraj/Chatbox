import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
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

export default User;
