const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const nodemailer = require('nodemailer');
const testRouter = require('./routes/test')
//for env variables
dotenv.config()

//express is a top-level function
const app = express()
app.use(morgan('dev'))

console.log(process.env['gmail'])

app.use('/test',testRouter)
// const transporter = nodemailer.createTransport({
// service: 'gmail',
// auth: {
//     user: process.env['gmail'],
//     pass: process.env['password']
// }
// });

// const mailOptions = {
// from: 'youremail@gmail.com',
// to: process.env['gmail'],
// subject: 'Sending Test mail',
// text: 'That was easy!'
// };
  

// transporter.sendMail(mailOptions, function(error, info){
// if (error) {
//     console.log(error);
// } else {
//     console.log('Email sent: ' + info.response);
// }
// });

app.listen(process.env.PORT,(err, data)=>{
    if (err){
        console.log('App is not running');
    }
    else{
        console.log('App is running');
    }
})