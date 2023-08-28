import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "huzaifa18072002@gmail.com",
    pass: "MuhammadHuzaifaKhan18072002",
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
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "***************@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
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
