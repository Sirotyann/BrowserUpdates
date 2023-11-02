const express = require('express')
const path = require('path');
const app = express()

app.get('/', function (req, res) {
    // res.header('Permissions-Policy', 'fullscreen=(self "http://local.test.com:3000")');
    // res.header('Permissions-Policy', 'fullscreen=(self "http://*.test.com:3000")');
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/popup_fullscreen', function (req, res) {
//     // res.header('Permissions-Policy', 'fullscreen=(self "http://localhost:3000/popup_fullscreen")');
//     // res.header('Permissions-Policy', 'fullscreen=(self "http://*.test.com:3000")');
//     res.sendFile(path.join(__dirname + '/popup_fullscreen.html'));
// });

// app.get('/popup', function (req, res) {
//     res.sendFile(path.join(__dirname + '/popup.html'));
// });


app.use(express.static('public'));

app.listen(3000)