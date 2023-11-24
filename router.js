const express = require('express')
const router = express.Router();

router
    .get('/login', (req, res) => {
    res.send('This is login page')
  })
    .post('/login', (req, res) => {
    res.send('You have logged in :)')
  });

router
    .get('/signup', (req, res) => {
    res.send('This is signup page')
  })
    .post('/signup', (req, res) => {
    res.send('You have signed in :)')
  });

router   
    .post('/logout', (req, res) => {
    res.send('You have logged out :)')
  });

module.exports = router;