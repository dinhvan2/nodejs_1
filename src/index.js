const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

const { engine } = require ('express-handlebars');

app.use(express.static(path.join(__dirname, 'public'))) //static file
app.use(morgan('combined'))

app.engine('.hbs', engine({extname: '.hbs'})); // config .handlebars
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})