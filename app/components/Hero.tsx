"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import CSSHeroBackground from "./CSSHeroBackground";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (titleRef.current && !isMobile) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"
    >
      {/* CSS Animation Background */}
      <div className="absolute inset-0 z-0">
        <CSSHeroBackground />
      </div>

      {/* Optimized Background Elements - Reduced particles for better performance */}
      <div className="absolute inset-0 z-1">
        {/* Floating Particles - Reduced from 50 to 20 for better performance */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-neon-cyan text-2xl sm:text-sm md:text-lg font-medium tracking-wider uppercase"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  ref={titleRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-none neon-text text-glow hero-title"
                >
                  <span className="block">Ataussamad</span>
                  <span className="block text-white">Ansari</span>
                </motion.h1>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-300"
              >
                <span className="text-white">Mobile Application Developer</span>
                <span className="mx-2 text-neon-cyan">|</span>
                <span className="text-white">Backend Developer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Building high-quality mobile applications with modern tools and
                scalable backend systems. Specialized in Android, Flutter, and
                cutting-edge web technologies.
              </motion.p>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="pt-4 lg:pt-6"
              >
                <p className="text-gray-400 text-sm mb-4 text-center lg:text-left font-medium">
                  Connect with me:
                </p>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/ataussamadansari",
                      label: "GitHub",
                      color: "hover:text-neon-purple hover:glow-purple",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/ataussamadansari",
                      label: "LinkedIn",
                      color: "hover:text-neon-blue hover:glow-blue",
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/sam.ans.88",
                      label: "Instagram",
                      color: "hover:text-neon-pink hover:glow-pink",
                    },
                    {
                      icon: Mail,
                      href: "mailto:sam.an.vns6@gmail.com",
                      label: "Email",
                      color: "hover:text-neon-purple hover:glow-purple",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                        rotateZ: 5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 glass-card rounded-full text-gray-400 transition-all duration-300 group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8 justify-center lg:justify-start"
              >
                <motion.a
                  href="/ataussamad_ansari-resume.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-button group relative overflow-hidden text-center flex items-center justify-center"
                >
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2 group-hover:animate-bounce" />
                  <span className="relative z-10">Download CV</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card px-6 lg:px-8 py-3 lg:py-4 rounded-full border border-neon-cyan/30 text-white font-semibold hover:bg-neon-cyan/10 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span className="text-sm lg:text-base">Hire Me</span>
                  <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 rotate-[-45deg] group-hover:animate-pulse" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile Image Area */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center relative order-1 lg:order-2"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-neon-purple/30"
                />

                {/* Inner Glow Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-3 sm:inset-4 rounded-full border border-neon-blue/40 glow-blue"
                />

                {/* Profile Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-6 sm:inset-8 glass-card rounded-full overflow-hidden glow-purple animate-pulse-glow"
                >
                  <Image
                    src="/samad_profile.jpeg"
                    alt="Ataussamad Ansari - Mobile Application Developer"
                    fill
                    className="object-cover rounded-full"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 via-transparent to-neon-blue/20 rounded-full" />
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card p-2 sm:p-4 rounded-xl sm:rounded-2xl glow-cyan"
                >
                  <span className="text-lg sm:text-2xl">📱</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-card p-2 sm:p-4 rounded-xl sm:rounded-2xl glow-purple"
                >
                  <span className="text-lg sm:text-2xl">🌟</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-4 sm:-right-6 glass-card p-2 sm:p-3 rounded-xl glow-blue"
                >
                  <span className="text-base sm:text-xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neon-cyan"
        >
          <span className="text-sm font-medium tracking-wider">SCROLL</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
