'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  SiJavascript,
  SiFlutter, SiAndroid, SiNodedotjs, SiMongodb, 
  SiFirebase, SiGithub
} from 'react-icons/si'
import { FaCode, FaServer, FaCloud, FaMobile, FaJava } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)
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
    if (typeof window !== 'undefined' && sectionRef.current && !isMobile) {
      gsap.fromTo(sectionRef.current.querySelectorAll('.skill-card'),
        { 
          opacity: 0, 
          y: 50,
          rotateX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
    }
  }, [isMobile])

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Java', icon: FaJava, color: '#ed8b00' },
        { name: 'Kotlin', icon: FaMobile, color: '#7f52ff' },
        { name: 'Dart', icon: FaCode, color: '#0175c2' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      ]
    },
    {
      title: 'Frameworks',
      icon: '🚀',
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: FaServer, color: '#000000' },
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Cloudinary', icon: FaCloud, color: '#3448c5' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Android Studio', icon: SiAndroid, color: '#3ddc84' },
        { name: 'Google Cloud', icon: FaCloud, color: '#4285f4' },
      ]
    },
    {
      title: 'Mobile UI',
      icon: '📱',
      skills: [
        { name: 'Jetpack Compose', icon: FaMobile, color: '#4285f4' },
        { name: 'XML', icon: FaCode, color: '#ff6b35' },
      ]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="skills" 
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mobile-text-lg">
            Expertise in modern technologies for building exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={!isMobile ? { 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              } : { scale: 1.02 }}
              className="skill-card glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      x: 10,
                      backgroundColor: 'rgba(139, 92, 246, 0.1)'
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:glass-card transition-all cursor-pointer group/skill"
                  >
                    <skill.icon 
                      className="text-xl group-hover/skill:animate-pulse" 
                      style={{ color: skill.color }}
                    />
                    <span className="font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills