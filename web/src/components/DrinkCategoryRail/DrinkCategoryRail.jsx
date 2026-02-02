import { motion } from 'framer-motion'

const categoryIcons = {
  Cocktails: '🍹',
  Slushies: '🧊',
  Beer: '🍺',
  Wine: '🍷',
  Spirits: '🥃',
  'Soft Drinks': '🥤',
}

const DrinkCategoryRail = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="relative">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none md:hidden" />

      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
        <div className="flex gap-3 pb-2 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
          {/* All Categories button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(null)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
              flex items-center gap-2 whitespace-nowrap
              ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }
            `}
          >
            <span>🍸</span>
            All Drinks
          </motion.button>

          {/* Category buttons */}
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                flex items-center gap-2 whitespace-nowrap
                ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }
              `}
            >
              <span>{categoryIcons[category] || '🍸'}</span>
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DrinkCategoryRail
