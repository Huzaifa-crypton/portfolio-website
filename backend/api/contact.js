import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mail = {
    from: 'Portfolio Website',
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission',
    html: `<p><b>Name</b>: ${name}</p>
           <p><b>Email</b>: ${email}</p>
           <p><b>Message</b>: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ status: 'ERROR', error: error.message });
    } else {
      res.status(200).json({ status: 'Message Sent' });
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
