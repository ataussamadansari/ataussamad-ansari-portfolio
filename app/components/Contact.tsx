'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import LightweightParticles from './LightweightParticles'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8858285271',
      href: 'tel:+918858285271',
      color: 'neon-cyan'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'sam.an.vns6@gmail.com',
      href: 'mailto:sam.an.vns6@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karadhana, Varanasi, 221307 (U.P.) INDIA',
      href: '#',
      color: 'neon-purple'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Lightweight Background Animation */}
      <LightweightParticles count={15} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black neon-text mb-6 mobile-section-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mobile-text-lg">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-8 h-8 text-neon-cyan" />
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>
            </div>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-4 p-6 glass-card rounded-2xl hover:glow-purple transition-all group"
              >
                <div className={`p-4 rounded-full bg-${info.color}/20 border border-${info.color}/30 text-${info.color} group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-300 break-words">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 lg:p-8 hover:glow-blue transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-neon-blue" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none transition-all text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none transition-all text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-card border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-card border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none transition-all resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full neon-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact