'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current && !isMobile) {
      gsap.fromTo(sectionRef.current.querySelectorAll('.about-text'), 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )
    }
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-gradient-to-b from-dark-900 to-dark-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black neon-text mb-6 mobile-section-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="about-text space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl font-medium text-white">
                I am a passionate Mobile Application Developer skilled in Android (Java/Kotlin), 
                Flutter, Jetpack Compose, and backend technologies like Node.js, Express.js, and MongoDB.
              </p>
              <p>
                I enjoy creating smooth UI/UX experiences, scalable app logic, and modern digital 
                solutions that solve real-world problems. My expertise spans from native Android 
                development to cross-platform Flutter applications.
              </p>
              <p>
                Currently expanding my skills in cutting-edge web technologies including Next.js 
                and modern animation libraries to create immersive, interactive experiences that bridge the gap 
                between mobile and web development.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="about-text grid grid-cols-2 gap-4 mt-8">
              {[
                'Mobile Development',
                'Backend Systems', 
                'UI/UX Design',
                'API Integration'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-4 text-center hover:glow-purple transition-all duration-300"
                >
                  <span className="text-neon-cyan font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Avatar/Profile */}
          <motion.div
            ref={avatarRef}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer Rotating Ring - Disabled on mobile */}
              <motion.div
                animate={!isMobile ? { rotate: 360 } : {}}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-neon-purple/40"
              />
              
              {/* Middle Ring - Disabled on mobile */}
              <motion.div
                animate={!isMobile ? { rotate: -360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-neon-blue/50 glow-blue"
              />
              
              {/* Inner Ring - Disabled on mobile */}
              <motion.div
                animate={!isMobile ? { rotate: 360 } : {}}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-neon-cyan/60"
              />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={!isMobile ? { scale: 1.1, rotateY: 15 } : { scale: 1.02 }}
                className="absolute inset-12 glass-card rounded-full overflow-hidden glow-purple"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src="/samad_profile.jpeg"
                  alt="Ataussamad Ansari - About"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 192px, 256px"
                />
                {/* Overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 via-transparent to-neon-blue/20 rounded-full" />
              </motion.div>
              
              {/* Floating Elements - Simplified on mobile */}
              <motion.div
                animate={!isMobile ? { 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass-card p-2 sm:p-3 rounded-xl glow-cyan"
              >
                <span className="text-lg sm:text-xl">🚀</span>
              </motion.div>
              
              <motion.div
                animate={!isMobile ? { 
                  y: [0, -15, 0],
                  rotate: [0, -180, -360]
                } : {}}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card p-2 sm:p-3 rounded-xl glow-purple"
              >
                <span className="text-lg sm:text-xl">⚡</span>
              </motion.div>
              
              <motion.div
                animate={!isMobile ? { 
                  x: [0, 15, 0],
                  y: [0, -10, 0]
                } : {}}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-6 sm:-right-8 glass-card p-2 sm:p-3 rounded-xl glow-blue"
              >
                <span className="text-base sm:text-xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About