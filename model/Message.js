const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({

      sender: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
      receiver: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
      },
      name: {
        type: String
      },
      senderAvatar: {
        type: String
      },
      receiverAvatar:{
        type: String
      }
})

module.exports = Message = mongoose.model('message', MessageSchema);