const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema(
    {
        questionId : {type: String},
        userId:{type: String},
        username: {type: String},
        answer : {type: String},
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('Answer', answerSchema)