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
    isApproved: {
        type: Boolean,
        default: false,
    },
    toApprove: {
        type: Boolean,
        default: true,
    },
    created: { // created time - used for matching
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },

}, { collection: 'conversations' });

module.exports = exports = mongoose.model('Conversation', ConversationSchema);
