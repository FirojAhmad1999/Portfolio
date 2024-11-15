import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Instagram Clone"
          des="Developed an Instagram-inspired mobile app using React Native and Firebase, featuring real-time chat, social feeds, and role-based authentication for secure access."
          src={projectOne}
        />
        <ProjectsCard
          title="E-Commerce Platform Clone"
          des="Created a dynamic and responsive e-commerce website using React and Redux on the frontend and Node.js with MongoDB on the backend, enabling full cart and checkout functionality."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting Application"
          des="Built a real-time chat application with user online/offline status, utilizing the MERN stack for seamless user interaction and a responsive design with Tailwind CSS."
          src={projectThree}
        />
        <ProjectsCard
          title="Hospital Management System"
          des="Designed a MongoDB schema to optimize data handling and implemented secure RESTful APIs with Node.js, focusing on data security and confidentiality of medical records."
          src={projectFour}
        />
        <ProjectsCard
          title="Authentication & Payment Module"
          des="Built a secure, token-based authentication system with Razorpay payment integration, ensuring reliable transaction processing and user-friendly authentication."
          src={projectFive }
        />
        <ProjectsCard
          title="Social Media Clone"
          des="Implemented core social media features in a mobile app, including secure access, real-time messaging, and responsive UI, enhancing user interactivity and engagement."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects;
