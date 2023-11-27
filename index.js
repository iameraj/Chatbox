import dotenv from 'dotenv';
import express, { json } from 'express';
import router from './router.js';

dotenv.config();
const app = express();
const port = process.env.API_PORT;
const host = process.env.API_HOST;

app.use(json());
app.use('/', router);

app.get('/', (_, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
