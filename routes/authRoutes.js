import { Router } from "express";
import passport from "../utils/passport.js";
const router = Router();

// Login route
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, _info) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error lol" });
        }

        if (!user) {
            return res.status(401).json({ error: "Authentication failed" });
        }

        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            return res.status(200).json({ success: true, user: user });
        });
    })(req, res, next);
});

// Get user route
router.get("/whoami", (req, res) => {
    if (req.isAuthenticated()) {
        res.header("Access-Control-Allow-Credentials", true);
        res.status(200).json({ authenticated: true, user: req.user });
    } else {
        res.status(401).json({ authenticated: false });
    }
});

//Signup route
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
    } catch (error) {
        console.log("Error during signup:", error);
        res.status(400).json({ error: "Bad Request" });
        return;
    }
});

// Logout route
router.post("/logout", (req, res) => {
    req.logout(req.user, (err) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Error during logout",
            });
        }
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
});

export default router;
