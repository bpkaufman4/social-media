
const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: function() { return new ObjectId() }
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdatVal => dateFormat(createdatVal)
    }
},
{
    toJSON: {
        getters: true
    }
}
)

module.exports = ReactionSchema;