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
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      receiver:{
            type: Schema.Types.ObjectId
      }
})

module.exports = Message = mongoose.model('message', MessageSchema);