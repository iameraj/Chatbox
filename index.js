require('dotenv').config();
const express = require('express');
const db = require('./db');
const router = require('./router');

const app = express();
const port = process.env.API_PORT;
const url = process.env.API_URL;

app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running on ${url}:${port}`);
});
