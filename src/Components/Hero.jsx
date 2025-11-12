// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Download } from "lucide-react";
import { SocialLink } from "./common/SocialLink";
import { userProfile } from "../data/userProfile";
import { containerVariants } from "../utils/animations";

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const currentRole = userProfile.roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % userProfile.roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  // Mouse tracking for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center pt-20  relative overflow-hidden"
    >
      {/* Hero-specific cursor spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            800px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(6, 182, 212, 0.25),
            rgba(6, 182, 212, 0.12) 35%,
            rgba(59, 130, 246, 0.08) 60%,
            transparent 85%
          )`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 lg:gap-16 relative z-10 max-w-7xl">
        {/* Left Side: Text Content */}
        <motion.div
          className="md:w-1/2 lg:w-[48%] text-center md:text-left mb-10 md:mb-0 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting with fade-in animation */}
          <motion.span
            className="text-cyan-400 text-lg font-semibold inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>

          {/* Name with gradient and scale animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white my-3 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            {userProfile.name}
          </motion.h1>

          {/* Dynamic Role with typing effect */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 md:h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a{" "}
            <span className="text-cyan-400 font-semibold inline-block min-w-[300px] text-left">
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </span>
          </motion.h2>

          {/* Description with stagger effect */}
          <motion.p
            className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about building{" "}
            <span className="text-cyan-300 font-medium">modern web applications</span>{" "}
            and exploring{" "}
            <span className="text-cyan-300 font-medium">new technologies</span>.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SocialLink
              href={userProfile.socials.linkedin}
              icon={<Linkedin size={28} />}
              label="LinkedIn"
            />
            <SocialLink
              href={userProfile.socials.github}
              icon={<Github size={28} />}
              label="GitHub"
            />
          </motion.div>

          {/* CTA Button with enhanced animation */}
          <motion.a
            href={userProfile.cv}
            download
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center">
              Download CV
              <Download size={20} className="ml-2 group-hover:animate-bounce" />
            </span>
          </motion.a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 lg:w-[48%] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-80"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, #06b6d4 50%, transparent 100%)",
                padding: "4px",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full bg-slate-900 rounded-full" />
            </motion.div>

            {/* Image */}
            <motion.img
              src={userProfile.image}
              alt={userProfile.name}
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-900"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};