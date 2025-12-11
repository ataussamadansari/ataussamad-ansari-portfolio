'use client'

import { motion } from 'framer-motion'

const SimpleFallback = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500">
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
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
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-16 h-16 border-2 border-white/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Tech Icons */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-4xl text-white/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ⚛️
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-3xl text-white/30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          📱
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4 text-3xl text-white/30"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          🚀
        </motion.div>
      </div>
    </div>
  )
}

export default SimpleFallback