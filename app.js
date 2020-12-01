if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const indexRouter = require('./controllers/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)