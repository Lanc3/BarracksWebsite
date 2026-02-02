import { AnimatePresence, motion } from 'framer-motion'

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

const DrinkDetailsSheet = ({ drink, isOpen, onClose }) => {
  if (!drink) return null

  const iconSrc = iconMap[drink.iconKey] || iconMap.default

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sheet */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-hidden rounded-t-3xl bg-gray-900 border-t border-gray-700"
          >
            {/* Handle */}
            <div className="flex justify-center py-3">
              <div className="w-12 h-1.5 bg-gray-700 rounded-full" />
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-40px)] pb-safe">
              {/* Hero Section */}
              <div className="relative px-6 pt-4 pb-8">
                {/* Background glow */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      background: [
                        'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
                        'radial-gradient(ellipse at 30% 0%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
                        'radial-gradient(ellipse at 70% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
                        'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0"
                  />
                </div>

                {/* Drink Icon */}
                <div className="relative flex justify-center mb-6">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={iconSrc}
                      alt={drink.name}
                      className="w-32 h-32 object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                  />
                </div>

                {/* Name & Category */}
                <div className="text-center relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {drink.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-purple-400"
                  >
                    {drink.category}
                  </motion.p>
                </div>

                {/* Tags */}
                {drink.tags && drink.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mt-4"
                  >
                    {drink.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`
                          px-3 py-1 text-sm font-medium rounded-full text-white
                          bg-gradient-to-r ${tagColors[tag] || 'from-gray-600 to-gray-700'}
                        `}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Details */}
              <div className="px-6 pb-8 space-y-6">
                {/* Description */}
                {drink.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      About
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{drink.description}</p>
                  </motion.div>
                )}

                {/* Ingredients */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Ingredients
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {drink.ingredients.map((ingredient, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{ingredient}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ABV */}
                {drink.abv && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-4"
                  >
                    <div className="text-center bg-gray-800/50 rounded-xl px-6 py-4">
                      <p className="text-2xl font-bold text-white">{drink.abv}%</p>
                      <p className="text-xs text-gray-400 uppercase">Alcohol</p>
                    </div>
                  </motion.div>
                )}

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  onClick={onClose}
                  className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-colors font-medium"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DrinkDetailsSheet
