require('dotenv').config()
const mongoose = require('mongoose');

const uri = process.env.DB_CONNECTION_STRING;

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;