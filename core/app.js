const express = require('express')
const path = require('path')
const mainController = require('./controllers/mainController')
const io = require('./sockets');

const app = express()
app.io = io

app.use(express.static('public'))

app.set('views', path.join(__dirname, '../public/views'))
app.set('view engine', 'ejs')

app.get('/', mainController.getRoot)

module.exports = app
