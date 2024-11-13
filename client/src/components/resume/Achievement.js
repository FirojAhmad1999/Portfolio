import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Qualified JEE Main"
            subTitle="Achieved in 2017"
            result="Success"
            des="Successfully qualified the JEE Main exam, demonstrating a strong foundation in mathematical and analytical skills."
          />
          <ResumeCard
            title="C++ Hackathon - 1st Rank"
            subTitle="During B.C.A. at College"
            result="1st Place"
            des="Secured 1st rank in a competitive C++ hackathon, showcasing problem-solving skills and programming expertise."
          />
          <ResumeCard
            title="IoT Workshop"
            subTitle="7-Day Workshop at Pondicherry University"
            result="Completed"
            des="Participated in a comprehensive IoT workshop, gaining hands-on experience with IoT systems and applications."
          />
          <ResumeCard
            title="Full Stack MERN Development"
            subTitle="Completed with iNeuron"
            result="Certified"
            des="Successfully completed Full Stack MERN development training with iNeuron, building expertise in creating full-stack applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
