
const express = require('express')
const path = require('path')
const open = require('open')
const app = express()
const port = 9000

app.get('/', function (req, res) { 
    console.log(`index ${new Date().getTime()}`)
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello', function (req, res) { 
    console.log(`hello ${new Date().getTime()}`)
    res.sendFile(path.join(__dirname + '/hello.html'));
});

// app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    open(`http://localhost:${port}`)
})
