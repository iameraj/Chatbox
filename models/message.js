const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;