require('dotenv').config({ path: __dirname + '/../.env' })
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = process.env.PORT || 5000
const db = process.env.ATLAS_URI

const generate = require('./routes/api/generate')
const verbs = require('./routes/api/verbs')

const app = express()

app.use(express.json())

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB has connected.'))
    .catch((err) => console.log(err));

app.use('/api/generate', generate)
app.use('/api/verbs', verbs)

app.listen(port, () => console.log(`Server started on port ${port}`))