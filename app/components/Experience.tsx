'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && timelineRef.current && sectionRef.current && !isMobile) {
      // Animate timeline line
      gsap.fromTo(timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
          }
        }
      )

      // Animate experience cards
      gsap.fromTo(sectionRef.current.querySelectorAll('.experience-card'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      )
    }
  }, [isMobile])

  const experience = {
    company: 'Aradhaya Technologies & Skill Development',
    location: 'Varanasi (221106)',
    role: 'Mobile Developer / Software Developer',
    duration: 'Sep 2024 – Present',
    description: 'Working on mobile app development, backend integration, REST APIs, Flutter applications, and real-world production projects.',
    responsibilities: [
      'Developing cross-platform mobile applications using Flutter',
      'Building scalable backend systems with Node.js and Express.js',
      'Integrating REST APIs and third-party services',
      'Implementing modern UI/UX designs with Jetpack Compose',
      'Collaborating on production-level projects'
    ]
  }

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="section-padding bg-gradient-to-b from-dark-800 to-dark-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black neon-text mb-6 mobile-section-title">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              ref={timelineRef}
              className="absolute left-8 top-0 w-1 h-full timeline-line rounded-full origin-top"
            />

            {/* Experience Card */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="experience-card relative pl-20 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-neon-purple rounded-full glow-purple border-4 border-dark-800" />
              
              {/* Card Content */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 rounded-2xl hover:glow-purple transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 mobile-text-xl">
                      {experience.role}
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-neon-cyan mb-2 mobile-text-lg">
                      {experience.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-neon-blue flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-3">
                    {['Flutter', 'Node.js', 'Express.js', 'REST APIs', 'Jetpack Compose', 'MongoDB'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 glass-card rounded-full text-sm font-medium text-neon-cyan hover:glow-cyan transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience