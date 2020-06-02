const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OProfileSchema = new Schema({
  organizer: {
        type: Schema.Types.ObjectId,
        ref: 'organizer',
        },
        
  handle: {
    type: String,
    required: true,
    max: 40
  },
 
  bio: {
    type: String
  },
  rating:{
    type:Number
  },
  tripCompletion:{
    type:Number
  },
  onTime:{
    type:Number
  },
  behaviour:{
    type:Number
  },
  
 
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = OProfile = mongoose.model('oprofile', OProfileSchema);
