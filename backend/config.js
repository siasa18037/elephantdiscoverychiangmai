// config.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // เปลี่ยนเป็น SMTP host ของคุณ
    port: 465, // หรือ port ที่ SMTP server ของคุณใช้
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'elephantdiscoveryserver@gmail.com', // SMTP user ของคุณ
        pass: 'mnwy tror gmai nrxx', // SMTP password ของคุณ
    },
});

module.exports = transporter;

// jncs fjpq zior yivf