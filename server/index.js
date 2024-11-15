import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // Assuming mongoose is required for MongoDB
import ContactDetails from './models/userDetails.js'; // Ensure this file exists and is correctly set up

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS setup
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Update as per your frontend's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection failed!', err.message);
    throw err; // Throw the error so the app doesn't start without a DB connection
  }
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: false, // Use true if your SMTP service requires secure connections (e.g., port 465)
});

// POST route to send email and save contact data
app.post('/send-email', async (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  // Validate input
  if (!username || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // Create a new contact document
  const newContact = new ContactDetails({
    username,
    phoneNumber,
    email,
    subject,
    message,
  });

  try {
    // Save contact data to MongoDB
    const saveData = await newContact.save();
    console.log('Contact data saved:', saveData);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change if you want to send to another recipient
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log('Mail sent:', mailResponse);

    res.status(200).json({ success: true, message: 'Email sent and data saved successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send email or save data.', error: error.message });
  }
});

// Start the server only after DB connection
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start the server:', err.message);
  });

