const express = require('express')
const router = express.Router()

const Format = require('../../models/Format')

router.get('/', (req, res) => {
    Format.find()
        .then(format => res.json(format))
})

router.get('/verbs/', (req, res) => {
    Verb.find()
        .then(verbs => res.send(verbs))
})

module.exports = router