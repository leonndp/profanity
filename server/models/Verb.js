const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const VerbSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Verb = mongoose.model('verb', VerbSchema);