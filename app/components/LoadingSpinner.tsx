'use client'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900">
      <div className="text-center">
        {/* Pure CSS spinner for better performance */}
        <div className="w-16 h-16 border-4 border-neon-purple/30 border-t-neon-purple rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-lg font-medium animate-pulse">
          Loading Portfolio...
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner