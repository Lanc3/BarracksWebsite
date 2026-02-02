export const standard = defineScenario({
  drink: {
    one: {
      data: {
        name: 'Test Cocktail',
        slug: 'test-cocktail',
        category: 'Cocktails',
        ingredients: ['Vodka', 'Lime'],
        updatedAt: '2024-01-01T00:00:00.000Z',
      },
    },
    two: {
      data: {
        name: 'Test Beer',
        slug: 'test-beer',
        category: 'Beer',
        ingredients: ['Hops', 'Barley'],
        updatedAt: '2024-01-01T00:00:00.000Z',
      },
    },
  },
})
