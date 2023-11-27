import dotenv from 'dotenv';
import { connect, connection } from 'mongoose';

dotenv.config();
const connection_string = process.env.DB_CONNECTION_STRING;

connect(connection_string);
const db = connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;