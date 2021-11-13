
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        ref: 'User'
    },
    reactions: []
},
{
    toJSON: {
        getters: true
    },
        id: false
}
)

// function format(createdAt) {

// }

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;