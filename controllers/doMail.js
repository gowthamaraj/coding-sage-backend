const nodemailer = require('nodemailer');
const mail = (req, res)=>{
    data = req.body
    console.log(data)
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env['gmail'],
        pass: process.env['password']
    }
    });
    const mailOptions = {
    from: 'youremail@gmail.com',
    to: `${process.env['gmail']}, ${process.env['gowtham']}`,
    subject: `Codingsage enquiry ${data['number']}`,
    text: `Name : ${data['name']}
Email : ${data['email']}
Number : ${data['number']}
Message : ${data['message']}
    `
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
    res.send({message:'success'})
}

module.exports = mail