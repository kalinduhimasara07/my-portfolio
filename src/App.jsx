
import { About } from "./Components/About";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import { useEffect, useRef } from "react";


export default function App() {

  const cursorGlowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let isActive = false;

    const updateGlow = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.background = `radial-gradient(
          600px circle at ${mouseX}px ${mouseY}px,
          rgba(6, 182, 212, 0.15),
          rgba(6, 182, 212, 0.08) 40%,
          transparent 80%
        )`;
      }
      
      if (isActive) {
        requestAnimationFrame(updateGlow);
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isActive && cursorGlowRef.current) {
        isActive = true;
        cursorGlowRef.current.style.opacity = '1';
        updateGlow();
      }
    };

    const handleMouseLeave = () => {
      isActive = false;
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  return (
<div className="relative bg-slate-900 text-gray-100 font-inter">
      {/* Cursor Glow Effect */}
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'background' }}
      />
      
      {/* Content */}
      <div className="relative z-[2]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}