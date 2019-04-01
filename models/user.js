const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  accessToken: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ID: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'I am new!'
  },
  name: {
    type: String,
    required: true
  },
  pages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Page'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
