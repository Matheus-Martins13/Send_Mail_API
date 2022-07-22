import nodemailer from 'nodemailer';
require('dotenv').config();

class SendMailController {

  index(req, res) {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      auth: {
        process.env.USER_MAIL,
        process.env.PASSWORD_MAIL,
      },
    });

    transporter.sendMail({
      from: process.env.USER_MAIL,
      to: process.env.USER_MAIL,
      replyTo: process.env.USER_RECEIVER,
      subject: 'Hello, wellcome!',
      text: 'Hi! thanks for testing this code!',
    }).then((info) => {
      res.status(200).json(info);
    }).catch((error) => {
      res.status(500).json(error);
    });
  }
}

export default new SendMailController();
