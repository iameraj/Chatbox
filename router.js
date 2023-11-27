import { Router } from 'express';
import { compare } from 'bcrypt';
import User from './models/user.js';
import findOne from 'mongoose';

const router = Router();

router // This is two catch any external errors
    .use((err, _, res, _next) => {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
  });

router // Login page
    .get('/login', (_, res) => {
        res.send('This is login page')
    })
    .post('/login', async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            const match = await compare(password, user.password);
            if (match) {
                return res.status(200).json({ message: 'You have logged in :)' });
            } 
            return res.status(401).json({ error: 'Invalid username or password' });
                

        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    });
        

router // Signup page
    .get('/signup', (_, res) => {
        res.send('This is signup page')
    })
    .post('/signup', async (req, res) => {
        try {
            const { username, password } = req.body;
            const newUser = new User({ username, password});
            await newUser.save();
            res.status(201).send("User created Successfully :)");
        } catch (error) {
            console.log('Error during signup:', error);
            res.status(400).send("Bad Request :(");
            return;
        }
    });

router // Logut page
    .post('/logout', (_, res) => {
        res.send('You have logged out :)');
    });

export default router;
