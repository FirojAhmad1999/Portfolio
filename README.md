# Full-Stack MERN Portfolio with SMTP Email Service

This is a **full-stack MERN (MongoDB, Express.js, React.js, Node.js)** portfolio project that demonstrates my skills as a developer. The project showcases my work, with a modern, responsive frontend built with React, and a backend powered by Node.js and Express. It also integrates **SMTP email functionality** for sending contact form submissions directly to an email address.

## Features
- **Frontend**: Built with React.js to create a dynamic, responsive, and user-friendly interface.
- **Backend**: Node.js and Express.js for handling API requests, with MongoDB for storing user data and contact form submissions.
- **SMTP Mail Service**: Integrated SMTP mail functionality using Nodemailer to send emails from the contact form.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Form Validation**: Ensures all form fields are completed before submission.

## Technologies Used
- **Frontend**: React.js, HTML, CSS (with Tailwind CSS/Bootstrap for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **SMTP Service**: Nodemailer (for sending emails)
- **Version Control**: Git, GitHub

## Setup and Installation

Follow the steps below to run the project locally.

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/FirojAhmad1999/Portfolio.git


2. Install Dependencies
Navigate to the client directory and install the frontend dependencies:

bash
Copy code
cd client
npm install
Then, navigate to the server directory and install the backend dependencies:

bash
Copy code
cd ../server
npm install
3. Configure SMTP Service
To send emails, configure Nodemailer with your SMTP credentials. Open server/config/nodemailerConfig.js (or wherever you have the configuration) and replace the following fields:

javascript
Copy code
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",  // You can change this to other services like SendGrid
  auth: {
    user: "your-email@gmail.com",  // Your email
    pass: "your-email-password",   // Your email password or an app password
  },
});

module.exports = transporter;
Note: It’s recommended to use an app password or a service like SendGrid instead of your personal email password for security reasons.

4. Run the Application
Start the Backend
In the server folder, start the backend server:

bash
Copy code
cd server
npm start
Start the Frontend
In the client folder, start the frontend application:

bash
Copy code
cd client
npm start
5. Access the Application
Once both the backend and frontend are running, open your browser and go to http://localhost:3000 to view your portfolio.

Usage
The Contact Form allows users to submit messages directly from the frontend.
The Nodemailer integration will send the form submissions to the email address configured in the backend.
Folder Structure
The project has the following folder structure:

php
Copy code
Portfolio/
│
├── client/                  # Frontend (React.js)
│   ├── public/
│   ├── src/
│   ├── package.json
│
├── server/                  # Backend (Node.js & Express)
│   ├── config/              # SMTP configuration
│   ├── controllers/         # Handles API logic
│   ├── routes/              # API routes
│   ├── server.js            # Entry point for the server
│   ├── package.json
│
├── README.md                # Project documentation
