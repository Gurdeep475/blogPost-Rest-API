const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('post',postSchema)