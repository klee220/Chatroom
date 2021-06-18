const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  room_name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  messageBody: {
    type: String,
    required: true
  }
});
module.exports = Item = mongoose.model('message', MessageSchema);