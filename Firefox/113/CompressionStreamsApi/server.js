const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/txt', (req, res) => {
    res.sendFile(path.join(__dirname, '/text.txt'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})