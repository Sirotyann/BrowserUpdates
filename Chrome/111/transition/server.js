
const express = require('express')
const path = require('path')
const open = require('open')
const app = express()
const port = 9000

app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pageB', function (req, res) { 
    res.sendFile(path.join(__dirname + '/pageB.html'));
});


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    open(`http://localhost:${port}`)
})
