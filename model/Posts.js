const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'users'
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref:'organizer'
  },
  title:{
    type:String,
    // required:true
  },
  image:{
    type:String,
  },
  text: {
    type: String,
    required: true
  },
  email:{
    type:String,
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      organizer: {
        type: Schema.Types.ObjectId,
        ref: 'organizer'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      organizer: {
        type: Schema.Types.ObjectId,
        ref: 'organizer'
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
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now() + 5*60*60*1000
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
