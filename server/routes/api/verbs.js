const express = require('express');
const router = express.Router();

const Verb = require('../../models/Verb')

router.get('/', (req, res) => {
    Verb.aggregate([
        { $sample: { size: 1 } }
    ])
        .then(verbs => res.json(verbs))
})

module.exports = router