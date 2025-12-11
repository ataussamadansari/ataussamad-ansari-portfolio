'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  SiFlutter, SiFirebase, SiPhp, SiNodedotjs, 
  SiMongodb
} from 'react-icons/si'
import { FaCloud, FaServer, FaCode, FaJava } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
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
      gsap.fromTo(sectionRef.current.querySelectorAll('.project-card'),
        { 
          opacity: 0, 
          y: 100,
          rotateX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      )
    }
  }, [isMobile])

  const projects = [
    {
      title: 'Online Form India',
      description: 'Users can fill government/private forms online.',
      fullDescription: 'Online cyber cafe platform for filling government and private forms with real-time messaging capabilities and user management system.',
      tech: [
        { name: 'Java', icon: FaJava, color: '#ed8b00' },
        { name: 'XML', icon: FaCode, color: '#ff6b35' },
        { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
        { name: 'Laravel', icon: SiPhp, color: '#777bb4' },
      ],
      gradient: 'from-neon-blue to-neon-purple',
      icon: '📋',
      status: 'Completed'
    },
    {
      title: 'Dollar Wallpaper',
      description: 'Browse HD wallpapers and set device wallpaper.',
      fullDescription: 'Browse and set device wallpapers with Google authentication, favorites system, and seamless user experience with high-quality images.',
      tech: [
        { name: 'Java', icon: FaJava, color: '#ed8b00' },
        { name: 'XML', icon: FaCode, color: '#ff6b35' },
        { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
        { name: 'Laravel', icon: SiPhp, color: '#777bb4' },
      ],
      gradient: 'from-neon-cyan to-neon-blue',
      icon: '🖼️',
      status: 'Completed'
    },
    {
      title: 'Propmize',
      description: 'Property listing app for rent, buy, sell.',
      fullDescription: 'Property marketplace for buying, selling, and renting properties with Google Cloud integration, advanced search, and real-time notifications.',
      tech: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
        { name: 'Google Cloud', icon: FaCloud, color: '#4285f4' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      ],
      gradient: 'from-neon-purple to-neon-pink',
      icon: '🏠',
      status: 'Completed'
    },
    {
      title: 'Blinkyzo',
      description: 'Full social media platform similar to Instagram/Facebook.',
      fullDescription: 'Full-featured social media application with modern UI, real-time features, and comprehensive social interactions. Built with Flutter and MEN stack.',
      tech: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'Express.js', icon: FaServer, color: '#000000' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      ],
      gradient: 'from-neon-pink to-neon-purple',
      icon: '📱',
      status: 'Ongoing'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="projects" 
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mobile-text-lg">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={!isMobile ? { 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              } : { scale: 1.01 }}
              className="project-card glass-card rounded-2xl overflow-hidden hover:glow-purple transition-all duration-500 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    className="text-6xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.span>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Ongoing' 
                      ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                      : 'bg-neon-purple/20 text-neon-white border border-neon-purple/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 glass-card rounded-full text-white hover:glow-cyan transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 glass-card rounded-full text-white hover:glow-purple transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mobile-text-xl">
                    {project.title}
                  </h3>
                  <Zap className="w-6 h-6 text-neon-purple group-hover:animate-pulse" />
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {project.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.2 + techIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center space-x-2 px-3 py-2 glass-card rounded-full text-sm font-medium text-gray-300 hover:text-white hover:glow-cyan transition-all"
                    >
                      <tech.icon 
                        className="text-lg" 
                        style={{ color: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects