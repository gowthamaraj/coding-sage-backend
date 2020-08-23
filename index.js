const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser");
const testRouter = require('./routes/test')
const mailRouter = require('./routes/sendmail')
//for env variables
dotenv.config()

//express is a top-level function
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(process.env['gmail'])
app.use('/test',testRouter)
app.use('/contact',mailRouter)

app.listen(process.env.PORT,(err, data)=>{
    if (err){
        console.log('App is not running');
    }
    else{
        console.log('App is running');
    }
})