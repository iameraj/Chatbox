const express = require('express');
const router = express.Router();

const User = require('./models/user');

router // This is two catch any external errors
    .use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
  });

router // Login page
    .get('/login', (req, res) => {
        res.send('This is login page')
    })
    .post('/login', async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
          }

        const passwordMatch = (password === user.password) ? true:false;
        if (passwordMatch) {
            return res.status(200).json({ message: 'You have logged in :)' });
          } 
        else {
            return res.status(401).json({ error: 'Invalid username or password' });
          }
        });

router // Signup page
    .get('/signup', (req, res) => {
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
    .post('/logout', (req, res) => {
        res.send('You have logged out :)');
    });

module.exports = router;