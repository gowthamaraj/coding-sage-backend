const router = require('express').Router()
const nodemailer = require('nodemailer');
const mailController = require('../controllers/doMail')
router.post('/data',mailController)

module.exports = router