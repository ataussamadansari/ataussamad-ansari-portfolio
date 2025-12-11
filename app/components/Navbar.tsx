'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-card border-b border-white/10 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-0 lg:px-0">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand - Left side */}
            <div></div>

            {/* Desktop Menu - Center */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-neon-cyan font-medium transition-all duration-300 relative group text-sm xl:text-base py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Right side */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 glass-card rounded-lg border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-neon-cyan" />
                ) : (
                  <Menu className="w-6 h-6 text-neon-cyan" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-card border-l border-white/10 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-1xm font-black neon-text"
                  >
                    Menu
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 glass-card rounded-lg border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-neon-cyan" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        className="block py-4 px-4 text-gray-300 hover:text-neon-cyan font-medium transition-all duration-300 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{item.name}</span>
                          <motion.div
                            className="w-2 h-2 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.5 }}
                          />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-400 text-sm"
                  >
                    Mobile Application Developer
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar