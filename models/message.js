const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    _id: { // id for tweet
        type: String,
        unique: true,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    conversation: {
        type: String,
        required: true,
    },
    created: { // created time - used for matching
        type: Date,
        default: Date.now,
    },

}, { collection: 'messages' });

module.exports = exports = mongoose.model('Message', MessageSchema);
