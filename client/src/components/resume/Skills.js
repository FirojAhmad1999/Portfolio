import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend Skills",
    items: [
      { skill: "HTML5", level: "Expert" },
      { skill: "CSS3", level: "Advanced" },
      { skill: "TailwindCSS", level: "Advanced" },
      { skill: "JavaScript", level: "Expert" },
      { skill: "React.js", level: "Intermediate" },
      { skill: "React Native", level: "Intermediate" },
    ],
  },
  {
    category: "Backend Skills",
    items: [
      { skill: "REST APIs", level: "Advanced" },
      { skill: "Node.js", level: "Expert" },
      { skill: "Express.js", level: "Advanced" },
      { skill: "MongoDB", level: "Advanced" },
      { skill: "MySQL", level: "Intermediate" },
      { skill: "SQL", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { skill: "Git", level: "Advanced" },
      { skill: "Postman", level: "Intermediate" },
      { skill: "Razorpay Integration", level: "Basic" },
      { skill: "Docker", level: "Intermediate" },
      { skill: "Firebase", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20 text-white"
    >
      {skills.map((section, idx) => (
        <div key={idx} className="w-full">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              {section.category}
            </p>
            <h4 className="text-2xl md:text-4xl font-bold text-white">{section.category}</h4>
          </div>
          <div className="flex flex-col gap-6">
            {section.items.map((item, i) => (
              <div key={i} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium text-gray-300">{item.skill}</p>
                <span className="w-full h-2 bg-gray-600 rounded-md inline-flex mt-2 relative">
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: item.level === "Expert" ? "90%" : item.level === "Advanced" ? "75%" : "60%" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-md"
                  />
                  <span className="absolute text-xs right-2 top-[-18px] text-gray-400">{item.level}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
