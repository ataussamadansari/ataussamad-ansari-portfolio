'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Education = () => {
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

      // Animate education cards
      gsap.fromTo(sectionRef.current.querySelectorAll('.education-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      )
    }
  }, [isMobile])

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Forte Institute of Technology',
      location: 'Green Park Mawana Road, Meerut – 250001 (U.P.) INDIA',
      duration: '2025-27',
      status: 'Pursuing',
      grade: null,
      icon: '🎓',
      color: 'neon-purple'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Kashi Institute of Management & Science',
      location: 'Mirzamurad Varanasi, 221307',
      duration: '2021-24',
      status: 'Completed',
      grade: '66.5%',
      icon: '🎯',
      color: 'neon-blue'
    },
    {
      degree: '12th Grade (Intermediate)',
      institution: 'Kisan Inter College',
      location: 'Mirzamurad Varanasi, 221307',
      duration: '2020-21',
      status: 'Completed',
      grade: '68.8%',
      icon: '📚',
      color: 'neon-cyan'
    },
    {
      degree: '10th Grade (High School)',
      institution: 'Kisan Inter College',
      location: 'Mirzamurad Varanasi, 221307',
      duration: '2018-19',
      status: 'Completed',
      grade: '66%',
      icon: '🏫',
      color: 'neon-pink'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="education" 
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mobile-text-lg">
            Academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div 
              ref={timelineRef}
              className="absolute left-1/2 top-0 w-1 h-full timeline-line rounded-full origin-top transform -translate-x-1/2"
            />

            {education.map((item, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? ref : undefined}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`education-card relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 top-8 w-6 h-6 bg-${item.color} rounded-full glow-${item.color.split('-')[1]} border-4 border-dark-800 transform -translate-x-1/2 z-10`} />

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-8 rounded-2xl hover:glow-purple transition-all duration-300"
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className="text-4xl">{item.icon}</div>
                      <div className={`${index % 2 === 0 ? 'text-right' : ''}`}>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-2 ${
                          item.status === 'Pursuing' 
                            ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                            : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.degree}
                    </h3>
                    
                    <h4 className="text-xl font-semibold text-neon-cyan mb-3">
                      {item.institution}
                    </h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{item.duration}</span>
                      </div>
                    </div>
                    
                    {item.grade && (
                      <div className="flex items-center gap-2 text-neon-cyan">
                        <Award className="w-5 h-5" />
                        <span className="font-bold text-lg">{item.grade}</span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? ref : undefined}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="education-card relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Pursuing' 
                        ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                        : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.degree}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-neon-cyan mb-3">
                    {item.institution}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{item.duration}</span>
                    </div>
                  </div>
                  
                  {item.grade && (
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <Award className="w-4 h-4" />
                      <span className="font-bold">{item.grade}</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education