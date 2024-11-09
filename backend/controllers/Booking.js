const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const transporter = require('../config'); 
const bookingFilePath = path.join(__dirname, '../data/booking.json');
let booking = require(bookingFilePath);

admin_email = 'elephantdiscovery@gmail.com'

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
};

const generateNumericBookingId = () => {
    const uuid = uuidv4();
    const numericId = BigInt('0x' + uuid.replace(/-/g, ''));
    return numericId.toString().substring(0, 10); 
};

exports.getAllBooking = async (req, res) => {
    try {
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookingById = async (req, res) => {
    const { id_booking } = req.params; 
    try {
        const bookingItem = booking.find(item => item.bookingId === id_booking);
        if (bookingItem) {
            res.status(200).json(bookingItem); 
        } else {
            res.status(404).json({ message: 'Booking not found' }); 
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

exports.addNewBooking = async (req, res) => {
    const { firstName, lastName, email, phone, message, date_checkin, package_id, package, person, amountPerPerson, amount } = req.body;

    const bookingId = generateNumericBookingId();

    const dateCheckinFormatted = new Date(date_checkin).toISOString().split('T')[0];
    const dateCheckinFormatted_email = formatDate(date_checkin)

    let mailOptionsCustomer = {
        from: '"Elephant Discovery" <your_email@example.com>',
        to: email,
        subject: 'We Have Received Your Booking Request',
        text: `Dear ${firstName} ${lastName},\n\nThank you for your booking request with Elephant Discovery!\n\nWe will send you a confirmation email within 24 hours to let you know if your booking has been successfully confirmed.\n\nCheck-in Date: ${dateCheckinFormatted}\nNumber of People: ${person}`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
                    <table role="presentation" style="width: 100%; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                        <tr>
                            <td style="padding-bottom: 20px;">
                                <h2 style="color: #333333; font-size: 22px; margin-bottom: 10px;">Dear ${firstName} ${lastName},</h2>
                                <p style="font-size: 16px; color: #555555;">Thank you for your booking request with Elephant Discovery! We’re excited to have you.</p>
                                <p style="font-size: 16px; color: #555555;">We will send you a confirmation email within 24 hours to let you know if your booking has been successfully confirmed.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 style="color: #2f6f4f; font-size: 18px;">Booking Details:</h3>
                                <ul style="font-size: 16px; color: #555555; line-height: 1.6;">
                                    <li><strong>Package:</strong> ${package}</li>
                                    <li><strong>Check-in Date:</strong> ${dateCheckinFormatted_email}</li>
                                    <li><strong>Number of People:</strong> ${person}</li>
                                    <li><strong>Total Amount:</strong> ${amount} Bath</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 20px;">
                                <p style="font-size: 16px; color: #555555;">If you have any questions, feel free to contact us at <a href="mailto:elephantdiscovery@gmail.com" style="color: #007bff;">elephantdiscovery@gmail.com</a>.</p>
                                <p style="font-size: 16px; color: #555555;">Phone: +66 64 336 6553 <br>Facebook: <a href="https://www.facebook.com/elephantdiscovery" style="color: #007bff;">Elephant Discovery</a> <br>Instagram: <a href="https://www.instagram.com/edcm_thailand/" style="color: #007bff;">@edcm_thailand</a></p>
                                <p style="font-size: 16px; color: #555555;">We look forward to your visit!</p>
                                <p style="font-size: 16px; color: #555555;">Best regards,<br>Elephant Discovery Team</p>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `,
    };
    

    
    let mailOptionsAdmin = {
        from: '"Web server" <your_email@example.com>',
        to: admin_email,
        subject: 'New Booking',
        text: `New booking received:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDate_checkin: ${dateCheckinFormatted}\nPackage ID: ${package_id}\nPackage: ${package}\nNumber of People: ${person}\nAmount Per Person: ${amountPerPerson}\nTotal Amount: ${amount}\nMessage: ${message}\nBooking ID: ${bookingId}`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
                    <table role="presentation" style="width: 100%; background-color: #ffffff; padding: 20px;">
                        <tr>
                            <td style="padding-bottom: 20px;">
                                <h2 style="color: #5f6368;">New Booking Received</h2>
                                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Phone:</strong> ${phone}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 style="color: #2f6f4f;">Booking Details:</h3>
                                <ul>
                                    <li><strong>Package:</strong> ${package}</li>
                                    <li><strong>Date of Check-in:</strong> ${dateCheckinFormatted_email}</li>
                                    <li><strong>Number of People:</strong> ${person}</li>
                                    <li><strong>Amount Per Person:</strong> ${amountPerPerson} Bath</li>
                                    <li><strong>Total Amount:</strong> ${amount} Bath</li>
                                    <li><strong>Message:</strong> ${message}</li>
                                    <li><strong>Booking ID:</strong> ${bookingId}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 20px;">
                                <p>If you need to take any actions, please review the booking details above.</p>
                                <p>Best regards,<br>Web Server</p>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `,
    };
    

    try {
        await transporter.sendMail(mailOptionsCustomer);
        await transporter.sendMail(mailOptionsAdmin);

        const date_booking = new Date().toISOString();  

        const newBooking = { bookingId, date_booking, firstName, lastName, email, phone, message, date_checkin: dateCheckinFormatted, package_id, package, person, amountPerPerson, amount };
        booking.push(newBooking);

        fs.writeFile(bookingFilePath, JSON.stringify(booking, null, 2), (err) => {
            if (err) {
                console.error('Error writing to booking.json:', err);
                return res.status(500).json({ message: 'Error saving booking information' });
            }
        });

        res.status(200).json({ message: 'Email sent successfully', Booking: newBooking });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
};
