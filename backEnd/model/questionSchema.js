const mongoose = require('mongoose')

const questionModel = new mongoose.Schema(
    {
        title: {type:String},
        userId:{type:String},
        detailOfProblem: {type:String},
        tag: {type:Array},
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('Qusertion',questionModel)