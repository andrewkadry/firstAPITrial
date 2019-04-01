const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intentSchema = new Schema(
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
        questions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Question'
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Intent', intentSchema);
