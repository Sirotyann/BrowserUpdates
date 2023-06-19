
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const bookList = require('./books.json')
const bookMap = new Map(bookList.map(it => ([it.id, it])))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/books', (req, res) => {
    console.log(req.query)
    console.log(bookList)
    res.render('books', { title: 'books', books: bookList, message: 'pug' })
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})