const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    _id: { // id for tweet
        type: String,
        unique: true,
        required: true,
    },
    id1: {
        type: String,
        required: true,
    },
    id2: { // Classification according to system
        type: String,
        required: true,
    },
    messages: {
        type: Array,
        default: [],
    },
    created: { // created time - used for matching
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },

}, { collection: 'users' });

module.exports = exports = mongoose.model('Conversation', ConversationSchema);
