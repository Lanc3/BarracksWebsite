import { db } from 'src/lib/db'

// Admin queries (all drinks)
export const drinks = async () => {
  return db.drink.findMany({
    orderBy: { sortOrder: 'asc' },
  })
}

export const drink = async ({ id }) => {
  return db.drink.findUnique({
    where: { id },
  })
}

// Public queries (only active drinks, no price)
export const menuDrinks = async ({ category }) => {
  const where = { isActive: true }
  if (category) {
    where.category = category
  }

  const result = await db.drink.findMany({
    where,
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
  })

  // Exclude priceCents for public menu
  return result.map((drink) => {
    const { priceCents, ...publicDrink } = drink
    return publicDrink
  })
}

export const drinkCategories = async () => {
  const result = await db.drink.findMany({
    where: { isActive: true },
    select: { category: true },
    distinct: ['category'],
    orderBy: { category: 'asc' },
  })
  return result.map((r) => r.category)
}

// Mutations (admin only)
export const createDrink = ({ input }) => {
  return db.drink.create({
    data: {
      ...input,
      ingredients: input.ingredients || [],
      tags: input.tags || [],
    },
  })
}

export const updateDrink = ({ id, input }) => {
  return db.drink.update({
    data: input,
    where: { id },
  })
}

export const deleteDrink = ({ id }) => {
  return db.drink.delete({ where: { id } })
}
