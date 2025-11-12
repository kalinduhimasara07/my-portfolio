import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Section } from "./common/Section";
import { SocialLink } from "./common/SocialLink";
import { userProfile } from "../data/userProfile";
import { containerVariants, itemVariants } from "../utils/animations";

export const Contact = () => {
  const phoneHref = `tel:${userProfile.contact.phone.replace(/\s+/g, "")}`;

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>

        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center gap-8 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            href={`mailto:${userProfile.contact.email}`}
            className="flex items-center p-4 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={24} className="mr-3 text-cyan-500" />
            <span>{userProfile.contact.email}</span>
          </motion.a>

          {/* Grouped Phone + Location for large screens */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.a
              href={phoneHref}
              className="flex items-center p-4 bg-slate-800 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={24} className="mr-3 text-cyan-500" />
              <span>{userProfile.contact.phone}</span>
            </motion.a>

            <motion.div
              className="flex items-center p-4 bg-slate-800 rounded-lg text-gray-300"
              variants={itemVariants}
            >
              <MapPin size={24} className="mr-3 text-cyan-500" />
              <span>{userProfile.contact.location}</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-8 mt-12">
          <SocialLink
            href={userProfile.socials.linkedin}
            icon={<Linkedin size={32} />}
            label="LinkedIn"
          />
          <SocialLink
            href={userProfile.socials.github}
            icon={<Github size={32} />}
            label="GitHub"
          />
        </div>
      </div>
    </Section>
  );
};
