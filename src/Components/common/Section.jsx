import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../../utils/animations";

export const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
        {title}
      </h2>
      {children}
    </div>
  </motion.section>
);