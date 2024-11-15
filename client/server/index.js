import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import ContactDetails from './models/userDetails.js';
import connectDB from './db_Connection/index.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// MongoDB connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });

// CORS setup
app.use(cors({
  origin: 'https://portfolio-client-rcluot5ga-firojahmad123s-projects.vercel.app',
 // origin: 'http://localhost:3001', // Adjust to match your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));

// Body parser middleware
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: false,
});

// POST route to send email and save contact data
app.post("/send-email", async (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  // Create a new contact document
  const newContact = new ContactDetails({ username, phoneNumber, email, subject, message });

  try {
    // Save the contact data to MongoDB
    const saveData= await newContact.save();
    console.log(saveData)

    // Send the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent and data saved successfully!" });
  } 
  catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email or save data." });
  }
});

// Default port and app listen logic (already in connectDB .then block, can be removed)
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`⚙️ Server is running at port : ${PORT}`);
});
