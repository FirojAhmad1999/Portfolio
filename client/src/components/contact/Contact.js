import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const isOnlyLetters = (str) => /^[a-zA-Z\s]+$/.test(str); // Validates only letters and spaces

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Allow only digits, truncate if length exceeds 10
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Validations
    if (!username) {
      setErrMsg("Username is required!");
      return;
    }
    if (!isOnlyLetters(username)) {
      setErrMsg("Username should contain only letters!");
      return;
    }
    if (!phoneNumber) {
      setErrMsg("Phone number is required!");
      return;
    }
    if (phoneNumber.length !== 10) {
      setErrMsg("Phone number must be exactly 10 digits!");
      return;
    }
    if (!email) {
      setErrMsg("Email is required!");
      return;
    }
    if (!emailValidation()) {
      setErrMsg("Please provide a valid email!");
      return;
    }
    if (!subject) {
      setErrMsg("Subject is required!");
      return;
    }
    if (!message) {
      setErrMsg("Message is required!");
      return;
    }
    
    try {
      const response = await fetch("https://backend-navy-phi-51.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, phoneNumber, email, subject, message }),
      });
      const result = await response.json();

      if (result.success) {
        setSuccessMsg("Thank you! Your message has been sent successfully.");
        setErrMsg("");
      } else {
        setErrMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrMsg("Error: Unable to send message.");
    }

    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Enter your name"
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    placeholder="Enter 10-digit phone number"
                    className="contactInput"
                    type="text"
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email"
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Enter the subject"
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Write your message here"
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
