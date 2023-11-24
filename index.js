const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});