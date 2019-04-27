const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: { // id for tweet
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String, 
        required: true,
    },
    type: { // Classification according to system
        type: String,
        enum: ['Senior', 'User', 'Institute'],
        default: 'User',
    },
    topics: {
        type: Array,
        default: [],
    },
    image: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: '', 
    },
    age: {
        type: Number,
        default: '',
    },
    created: { // created time - used for matching
        type: Date,
        default: Date.now,
    },

}, { collection: 'users' });

module.exports = exports = mongoose.model('User', UserSchema);
