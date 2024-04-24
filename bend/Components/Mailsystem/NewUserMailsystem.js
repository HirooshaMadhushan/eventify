const connection = require('../../connection');
import { createTransport } from 'nodemailer';
const nodemailer = require('nodemailer');




const mailServer = createTransport({
    service: 'gmail',
    auth: {
        user: 'hirooshaweerasuriya@gmail.com',
        pass: 'wmhmw22595'
    }
});

console.log('Mail server created');

// Assuming you have a function to add a new user to the database
function addUserToDatabase(newUser) {
    // Your code to add a new user to the database
    // This function should also retrieve the email address of the new user
}

// Function to send email to the provided email address
function sendEmail(toEmail) {
    mailServer.sendMail({
        from: 'hirooshaweerasuriya@gmail.com',
        to: toEmail,
        subject: 'Test Mail',
        text: 'This is a test mail from nodemailer'
    }, (err, info) => {
        if (err) {
            console.log('Can not send email');
        } else {
            console.log('Email sent');
        }
    });
}

// Assuming you have a function to retrieve the email address of the newly added user
function getEmailAddressOfNewUser() {
    // Your code to retrieve the email address of the newly added user from the database
}

// Adding a new user to the database
const newUser = {
    // User data
};

addUserToDatabase(newUser);

// Getting email address of the newly added user
const toEmail = getEmailAddressOfNewUser();

// Sending email to the retrieved email address
sendEmail(toEmail);

console.log('Mail sent');
