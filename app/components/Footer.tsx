'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUp, Heart } from 'lucide-react'
import LightweightParticles from './LightweightParticles'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ataussamadansari',
      label: 'GitHub',
      color: 'neon-purple'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ataussamadansari',
      label: 'LinkedIn',
      color: 'neon-blue'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sam.ans.88',
      label: 'LinkedIn',
      color: 'neon-blue'
    },
    {
      icon: Twitter,
      // href: 'https://twitter.com/',
      href: '#',
      label: 'Twitter',
      color: 'neon-cyan'
    },
    {
      icon: Mail,
      href: 'mailto:sam.an.vns6@gmail.com',
      label: 'Email',
      color: 'neon-pink'
    }
  ]

  return (
    <footer className="bg-dark-900 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Lightweight Background Animation */}
      <LightweightParticles count={20} />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center lg:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-1xl sm:text-1xl lg:text-3xl font-black neon-text mb-3"
            >
              Ataussamad Ansari
            </motion.div>
            <p className="text-gray-400 flex items-center justify-center lg:justify-start gap-2">
              <span>© 2024 Designed & Developed with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-neon-pink fill-current" />
              </motion.span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with Next.js, Framer Motion & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotateZ: 5
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass-card rounded-full text-${social.color} hover:glow-${social.color.split('-')[1]} transition-all duration-300 group`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:animate-pulse" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            <p>Mobile Application Developer | Android • Flutter • Backend</p>
          </div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-4 py-2 rounded-full text-neon-cyan hover:glow-cyan transition-all duration-300 flex items-center space-x-2 group"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </motion.div>
          </motion.a>
        </div>

      </div>
    </footer>
  )
}

export default Footer