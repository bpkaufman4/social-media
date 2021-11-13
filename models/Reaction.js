
const { Schema, model } = require('mongoose');

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
        default: Date.now
        //use a getter method to format the timestamp on query
    }
})

const Reaction = model('Reaction', ReactionSchema);

module.exports =  Reaction;