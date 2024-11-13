import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Mobile App Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col gap-3 md:gap-5">
        <h4 className="text-base font-medium text-gray-300">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-blue-500 capitalize">Firoj Ahmad</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <div className="text-sm sm:text-base font-bodyFont leading-5 sm:leading-6 tracking-wide text-gray-300">
          <h3 className="font-semibold text-blue-400 mb-2">About Me</h3>
          <p>
            I am a passionate Full Stack Developer with nine months of hands-on experience in both front-end and back-end development. 
            My expertise spans across creating responsive and user-friendly web applications, APIs, and mobile solutions using modern 
            technologies including JavaScript, React, Node.js, and MongoDB. With a strong grasp of frameworks like React Native, Redux, and EJS, 
            I strive to develop efficient, scalable, and innovative software solutions that enhance user experience and fulfill business needs. 
            Driven by a commitment to quality and growth, I am always eager to tackle new challenges and expand my technical capabilities.
          </p>
        </div>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
