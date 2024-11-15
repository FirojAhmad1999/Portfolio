import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // MongoDB ORM
import ContactDetails from './models/userDetails.js'; // Ensure this file exists and is correctly set up

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enhanced logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'https://frontend-nu-seven-33.vercel.app', // Update as per your frontend's URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection failed!', err.message);
    throw err; // Prevent the server from starting without DB connection
  }
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: false, // Set to `true` for port 465, otherwise `false`
});

// Root GET route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the backend API! Use POST /send-email to send emails.');
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
    const savedData = await newContact.save();
    console.log('📄 Contact data saved:', savedData);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change if you want a different recipient
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${username}\nPhone: ${phoneNumber}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log('📧 Mail sent:', mailResponse);

    res.status(200).json({ success: true, message: 'Email sent and data saved successfully!' });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send email or save data.',
      error: error.message,
    });
  }
});

// Start the server after connecting to MongoDB
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to start the server:', err.message);
  });

// Graceful error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', promise, 'Reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit to prevent unstable state
});
