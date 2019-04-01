const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: Object,
      required: String
    },
      intents: [
          {
              type: Schema.Types.ObjectId,
              ref: 'Intent'
          }
      ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Page', pageSchema);
