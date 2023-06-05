
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const open = require('open')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/content', (req, res) => {
    console.log('get content ' + new Date())
    res.sendFile(path.join(__dirname + '/content.html'))
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

open('http://localhost:3000')