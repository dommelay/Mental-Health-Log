const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    date: {type: String, required: true},
    emotions: {type: String, required: true},
    feeling: {type: String, required: true},
    feelingemoji: {type: String, required: true},
    entry: {type: String, required: true}
})

const Log = mongoose.model('Log', logSchema)
module.exports = Log