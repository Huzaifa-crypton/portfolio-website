import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const contactEmail = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
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
    console.log("Ready to Send");
  }
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: "Portfolio Website",
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission",
    html: `<p><b>Name</b>: ${name}</p>
             <p><b>Email</b>: ${email}</p>
             <p><b>Message</b>: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
app.listen(5000, () => console.log("Server Running"));
