import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.js";
import { compare } from "bcrypt";

passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const user = await User.findOne({ username });
			if (!user) {
				return done(null, false);
			}
			const match = await compare(password, user.password);
			if (!match) {
				return done(null, false);
			}
			return done(null, user);
		} catch (err) {
			return done(err);
		}
	}),
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		if (user) {
			done(null, user);
		} else {
			done(new Error("User not found"));
		}
	} catch (error) {
		done(error);
	}
});

export default passport;
