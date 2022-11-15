
const express = require('express')
// const open = require('open')
const app = express()
const port = 3000
const path = require('path')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/y', function (req, res) {
    setTimeout(() => {
        res.sendFile(path.join(__dirname + '/index.html'));
    }, 5000)
});

app.get('/test', function (req, res) {
    setTimeout(() => {
        res.send('ok');
    }, 5000)
});


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // open(`http://localhost:${port}`)
})
