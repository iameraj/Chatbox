import _ from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./utils/passport.js";
import authRoutes from "./routes/authRoutes.js";
import friendRoutes from "./routes/friendRoutes.js";
import peopleRoutes from "./routes/peopleRoutes.js";
import express, { json } from "express";

dotenv.config();
const port = process.env.API_PORT;
const host = process.env.API_HOST;

const app = express();

app.use(json());

app.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60 * 60 * 1000 },
	}),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://127.0.0.1:5173",
		credentials: true,
	}),
);

app.use("/auth", authRoutes);
app.use("/friend-requests", friendRoutes);
app.use("/", peopleRoutes);

app.get("/", (_, res) => {
	res.send("Hello from Node.js!");
});

app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
