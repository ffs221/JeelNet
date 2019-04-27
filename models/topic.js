const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    _id: { // id for tweet
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String
    },
        created: { // created time - used for matching
        type: Date,
        default: Date.now,
    },

}, { collection: 'topics' });

module.exports = exports = mongoose.model('Topic', TopicSchema);
