import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
     type: String, 
     required: true 
    },
  email:
   { type: String,
     required: true 
    },
  subject:
   {
     type: String,
     required: true 
    },
  message:
   { 
    type: String,
     required: true 
    },
  date: 
  { 
    type: Date, 
    default: Date.now 
  },
});

const ContactDetails = mongoose.model("ContactDetails", contactSchema);

export default ContactDetails;
