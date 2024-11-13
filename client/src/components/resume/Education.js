import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 px-8 lg:px-20" // Added px-8 for mobile and lg:px-20 for larger screens
    >
      {/* Part One: Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-red-100 tracking-[4px]">2014 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.C.A. in Computer Application"
            subTitle="Pondicherry University (June 2022 – May 2024)"
            result="GPA:7.5/10"
            des="During my master's program, I deepened my knowledge in advanced topics like data structures, algorithms, and software development methodologies. This course provided me with a strong foundation in full-stack development, including hands-on experience in front-end and back-end technologies like React.js, Node.js, and MongoDB. My final project, a waste recycling management system built with React Native, showcased my ability to develop scalable mobile applications."
          />
          <ResumeCard
            title="B.C.A. in Computer Application"
            subTitle="Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur (May 2018 – June 2021)"
            result="GPA: 6.4/10"
            des="This bachelor's degree helped me develop a solid grounding in computer programming and web technologies. I gained proficiency in JavaScript, HTML5, CSS3, and SQL, which form the backbone of my full-stack development skills today. My coursework and projects fostered a passion for problem-solving and creating efficient applications, laying the foundation for my expertise in both front-end and back-end development."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="S S D KIC KURTHIYA BAZAR SIDDHARATH NAGAR (2014 - 2016)"
            result="7.5/10"
            des="In my secondary education, I specialized in Mathematics, Physics, and Chemistry, which honed my analytical and problem-solving skills. This foundation in logical thinking and complex problem-solving has greatly contributed to my approach in coding and software development, enabling me to break down complex challenges in programming and efficiently develop solutions."
          />
           <ResumeCard
            title="High School Education"
            subTitle="S S D KIC KURTHIYA BAZAR SIDDHARATH NAGAR (2013 - 2014)"
            result="8.5/10"
            des="In my 10th grade, I focused on a Science specialization, which developed my interest in technology and engineering. This initial exposure to the principles of physics, chemistry, and biology laid the groundwork for my curiosity in computers and software."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
