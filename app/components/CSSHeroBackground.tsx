'use client'

import { motion } from 'framer-motion'

const CSSHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-blue/10 to-neon-cyan/10 animate-pulse" />
      </div>

      {/* Optimized Floating Particles - Reduced from 30 to 15 */}
      {[...Array(15)].map((_, i) => (
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
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-neon-blue/30 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-16 h-16 border-2 border-neon-cyan/30 rotate-45"
        animate={{ 
          rotate: [45, 405],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity }
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 bg-neon-purple/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Mobile Device */}
      <motion.div
        className="absolute top-1/3 right-1/5 w-16 h-28 bg-gradient-to-b from-neon-blue/20 to-neon-purple/20 rounded-lg border border-white/10"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        {/* Screen */}
        <div className="w-12 h-20 bg-neon-blue/30 rounded-md m-2 animate-pulse" />
      </motion.div>

      {/* Tech Icons */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-4xl opacity-30"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⚛️
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-3xl opacity-30"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        📱
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 text-3xl opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        🚀
      </motion.div>

      {/* Animated Lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/6 left-1/6 w-8 h-8 bg-neon-purple/40 rounded-full blur-sm"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/6 right-1/6 w-6 h-6 bg-neon-cyan/40 rounded-full blur-sm"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
    </div>
  )
}

export default CSSHeroBackground