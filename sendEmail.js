const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendMail = (subject, text, html) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let recipients = process.env.RECIPIENTS.split(' '); // in env file a string of emails seperated with space is defined
    const msg = {
        to: recipients,                 // who get the mail
        from: process.env.SENDER,       // who's sending the mail
        subject: subject,               // the subject of the email
        text: text,                     // text in the email
        html: html,                     // additional html to be sent
    }
    
    sgMail.sendMultiple(msg);
}

module.exports = { sendMail };