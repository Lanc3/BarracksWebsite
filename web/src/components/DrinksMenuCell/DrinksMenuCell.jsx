import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import DrinkCategoryRail from 'src/components/DrinkCategoryRail/DrinkCategoryRail'
import DrinkDetailsSheet from 'src/components/DrinkDetailsSheet/DrinkDetailsSheet'
import DrinkMenuCard from 'src/components/DrinkMenuCard/DrinkMenuCard'

export const QUERY = gql`
  query MenuDrinksQuery($category: String) {
    menuDrinks(category: $category) {
      id
      name
      slug
      description
      category
      abv
      ingredients
      isFeatured
      iconKey
      imageUrl
      tags
    }
    drinkCategories
  }
`

export const Loading = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
    />
    <p className="mt-4 text-gray-400">Loading menu...</p>
  </div>
)

export const Empty = () => (
  <div className="text-center py-20">
    <p className="text-gray-400 text-lg">No drinks available at the moment.</p>
    <p className="text-gray-500 mt-2">Check back soon!</p>
  </div>
)

export const Failure = ({ error }) => (
  <div className="text-center py-20">
    <p className="text-red-400">Error loading menu: {error?.message}</p>
  </div>
)

export const Success = ({ menuDrinks, drinkCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedDrink, setSelectedDrink] = useState(null)

  // Filter drinks by category
  const filteredDrinks = selectedCategory
    ? menuDrinks.filter((drink) => drink.category === selectedCategory)
    : menuDrinks

  // Separate featured drinks
  const featuredDrinks = filteredDrinks.filter((drink) => drink.isFeatured)
  const regularDrinks = filteredDrinks.filter((drink) => !drink.isFeatured)

  return (
    <div className="space-y-8">
      {/* Category Filter Rail */}
      <DrinkCategoryRail
        categories={drinkCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Featured Section */}
      {featuredDrinks.length > 0 && !selectedCategory && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-purple-400 px-4 md:px-0 flex items-center gap-2">
            <span className="text-2xl">✨</span> Featured
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
            <AnimatePresence mode="popLayout">
              {featuredDrinks.map((drink, index) => (
                <DrinkMenuCard
                  key={drink.id}
                  drink={drink}
                  index={index}
                  isFeatured
                  onSelect={() => setSelectedDrink(drink)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.section>
      )}

      {/* Main Drinks Grid */}
      <motion.section layout className="space-y-4">
        {selectedCategory && (
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-semibold text-white px-4 md:px-0"
          >
            {selectedCategory}
            <span className="text-gray-400 text-sm font-normal ml-2">
              ({filteredDrinks.length} drinks)
            </span>
          </motion.h3>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          <AnimatePresence mode="popLayout">
            {(selectedCategory ? filteredDrinks : regularDrinks).map((drink, index) => (
              <DrinkMenuCard
                key={drink.id}
                drink={drink}
                index={index}
                onSelect={() => setSelectedDrink(drink)}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Empty State for Category */}
      {filteredDrinks.length === 0 && selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400">No drinks in this category yet.</p>
        </motion.div>
      )}

      {/* Drink Details Sheet */}
      <DrinkDetailsSheet
        drink={selectedDrink}
        isOpen={!!selectedDrink}
        onClose={() => setSelectedDrink(null)}
      />
    </div>
  )
}
