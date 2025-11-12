import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./common/Section";
import { projects } from "../data/projects";
import { containerVariants, itemVariants } from "../utils/animations";

export const Projects = () => {
  return (
    <Section id="projects" title="My Projects">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700 text-cyan-300 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={20} className="mr-2" />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};