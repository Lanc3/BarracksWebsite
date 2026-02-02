import { useState } from 'react'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Map icon keys to SVG paths (using existing public SVGs)
const iconMap = {
  cocktail: '/coup.svg',
  martini: '/porn.svg',
  beer: '/long.svg',
  wine: '/mart.svg',
  slush: '/slush.svg',
  default: '/coup.svg',
}

const tagColors = {
  Signature: 'from-purple-500 to-pink-500',
  Popular: 'from-amber-500 to-orange-500',
  New: 'from-green-500 to-emerald-500',
  Strong: 'from-red-500 to-rose-500',
  Tropical: 'from-cyan-500 to-teal-500',
  Classic: 'from-blue-500 to-indigo-500',
  Frozen: 'from-sky-400 to-blue-500',
  Refreshing: 'from-emerald-400 to-teal-500',
  Fruity: 'from-pink-400 to-rose-500',
  Sour: 'from-yellow-400 to-lime-500',
  Tiki: 'from-orange-400 to-amber-500',
  'House Special': 'from-violet-500 to-purple-600',
}

const DrinkMenuCard = ({ drink, index, isFeatured = false, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false)

  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const iconSrc = iconMap[drink.iconKey] || iconMap.default

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: index * 0.05,
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onSelect}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`
          relative cursor-pointer group
          ${isFeatured ? 'ring-2 ring-purple-500/50' : ''}
        `}
      >
        {/* Card Background with Glassmorphism */}
        <div
          className={`
            relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-gray-800/90 to-gray-900/90
            backdrop-blur-xl border border-gray-700/50
            transition-all duration-300
            ${isHovered ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : ''}
          `}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: isHovered
                ? [
                    'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                  ]
                : 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-3 right-3 z-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium text-white shadow-lg"
              >
                ✨ Featured
              </motion.div>
            </div>
          )}

          {/* Drink Icon */}
          <div className="relative h-40 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={
                isHovered
                  ? {
                      y: [0, -8, 0],
                      rotate: [0, -5, 5, 0],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}
              style={{
                transform: 'translateZ(40px)',
              }}
              className="relative z-10"
            >
              <img
                src={iconSrc}
                alt={drink.name}
                className="w-24 h-24 object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Glow effect behind icon */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.3, 0.5, 0.3] : 0.2,
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-5 pt-2 space-y-3">
            {/* Name */}
            <motion.h3
              style={{ transform: 'translateZ(20px)' }}
              className="text-lg font-bold text-white text-center"
            >
              {drink.name}
            </motion.h3>

            {/* Tags */}
            {drink.tags && drink.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5">
                {drink.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={`
                      px-2 py-0.5 text-xs font-medium rounded-full text-white
                      bg-gradient-to-r ${tagColors[tag] || 'from-gray-600 to-gray-700'}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Ingredients Preview */}
            <p className="text-sm text-gray-400 text-center line-clamp-2">
              {drink.ingredients.slice(0, 4).join(' • ')}
              {drink.ingredients.length > 4 && ' ...'}
            </p>

            {/* ABV Badge */}
            {drink.abv && (
              <div className="flex justify-center">
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                  {drink.abv}% ABV
                </span>
              </div>
            )}

            {/* View Details hint on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              className="text-center"
            >
              <span className="text-xs text-purple-400">Tap for details →</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DrinkMenuCard
