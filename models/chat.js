const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  participants: [{ type: String, required: true }],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;