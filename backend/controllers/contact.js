const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const transporter = require('../config'); 
const contactFilePath = path.join(__dirname, '../data/contact.json');
let contact = require(contactFilePath);

exports.getAllContact = async (req, res) => {
    try {
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.sendContact = async (req, res) => {
    const { name, email, message } = req.body;

    // ข้อความอีเมล
    let mailOptions = {
        from: '"Web server" <your_email@example.com>', // sender address
        to: '66010559@kmitl.ac.th', // list of receivers
        subject: 'Contact Form (ข้อความ Contact)', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, // html body
    };

    try {
        await transporter.sendMail(mailOptions);

        const newContact = { name, email, message };
        contact.push(newContact);

        fs.writeFile(contactFilePath, JSON.stringify(contact, null, 2), (err) => {
            if (err) {
                console.error('Error writing to contact.json:', err);
                return res.status(500).json({ message: 'Error saving contact information' });
            }
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
};
