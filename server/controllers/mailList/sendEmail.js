const { readFileSync } = require('fs');
const { join } = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async email => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const html = readFileSync(join(__dirname, 'template', 'index.html'));

  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Far Nearer',
    html,
  };
  transport.sendMail(mailOption);
};

module.exports = { sendEmail };
