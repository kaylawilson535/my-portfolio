if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const indexRouter = require('./controllers/index')
const designRouter = require('./controllers/design')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', indexRouter)
app.use('/designs', designRouter)

app.listen(process.env.PORT || 3000)