import React from "react";
import { motion } from "framer-motion";
import { Section } from "./common/Section";
import { skills } from "../data/skills";
import { containerVariants, itemVariants } from "../utils/animations";

export const Skills = () => {
  return (
    <Section id="skills" title="My Skills">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-cyan-400 mb-3">
                <IconComponent size={32} />
              </div>
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};
