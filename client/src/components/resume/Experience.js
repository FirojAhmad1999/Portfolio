import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Job Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Enterprise Minds (Jan 2024 – May 2024)"
            result="Pondicherry"
            des="Developed responsive front-end components using React.js and Bootstrap, enhancing user experience. Implemented server-side rendering with EJS, optimizing web performance by 25%. Built RESTful APIs and optimized website speed using Node.js and Express.js. Collaborated in a team of 5 to implement features for scalable web applications, improving performance by reducing load time."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Hackveda Pvt Ltd (Oct 2023 – Dec 2023)"
            result="Remote"
            des="Designed and developed websites using HTML5, CSS3, and JavaScript. Ensured responsive design and cross-browser compatibility for enhanced user experience. Managed front-end and back-end development tasks, improving overall website performance and functionality."
          />
        </div>
      </div>

      {/* Training Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2023</p>
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="CodSoft · Internship"
            result="Remote"
            des="Completed a 1-month front-end and some backend parts internship at CodSoft, honing skills in modern web development technologies such as HTML, CSS, JavaScript, and backend technologies. Gained valuable experience contributing to dynamic projects."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="BHARATH INTERN · Internship"
            result="Remote"
            des="Web Developer at Bharat Intern in the Software Development sector. Developed and maintained web applications, ensuring optimal performance and user experience. Collaborated with a team of developers to implement new features and enhancements. Gained valuable experience in web development technologies and methodologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
