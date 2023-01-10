
const express = require('express')
const path = require('path')
const open = require('open')
const app = express()
const port = 9000

let index = 0;

app.get('/', function (req, res) { 
    console.log(`index ${index++} -----------------------`)
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/speculation', function (req, res) { 
    console.log(`speculation ${index++} ===========================`)
    // res.set('Content-Security-Policy', `prefetch-src http://127.0.0.1:9000/morning hello.html`);
    res.sendFile(path.join(__dirname + '/speculationRules.html'));
});

app.get('/hello', function (req, res) { 
    console.log(`hello `)
    res.sendFile(path.join(__dirname + '/hello.html'));
});

app.get('/morning', function (req, res) { 
    console.log(`morning`)
    res.sendFile(path.join(__dirname + '/morning.html'));
});

// app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // open(`http://localhost:${port}`)
})
