
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs')
const crypto = require('crypto');

const bookList = require('./books.json')
const bookMap = new Map(bookList.map(it => ([it.id, it])))
const booksStyle = fs.readFileSync(path.resolve(__dirname, 'style/books.css'), 'utf8')
const bookStyle = fs.readFileSync(path.resolve(__dirname, 'style/book.css'), 'utf8')

app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'))
// })

const click_id = crypto.randomUUID()

app.get('/', (req, res) => {
    console.log('get books', req.query)
    res.render('books', { books: bookList, style: booksStyle, click_id })
})

app.get('/book', (req, res) => {
    console.log('book details', req.query)
    const book = bookMap.get(req.query.id)
    res.render('book', { book, style: bookStyle })
})

app.get('/.well-known', (req, res) => {
    console.log('## WELL-KNOWN ##', {
        query: req.query
    })
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})