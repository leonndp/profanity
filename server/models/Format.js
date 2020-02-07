const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormatSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = Format = mongoose.model('format', FormatSchema)