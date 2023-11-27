import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  conversationId: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
});

const Message = model('Message', messageSchema);

export default Message;