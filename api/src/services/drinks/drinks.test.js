import { drinks, drink, createDrink, updateDrink, deleteDrink } from './drinks'

describe('drinks', () => {
  scenario('returns all drinks', async (scenario) => {
    const result = await drinks()
    expect(result.length).toEqual(Object.keys(scenario.drink).length)
  })

  scenario('returns a single drink', async (scenario) => {
    const result = await drink({ id: scenario.drink.one.id })
    expect(result).toEqual(scenario.drink.one)
  })

  scenario('creates a drink', async () => {
    const result = await createDrink({
      input: {
        name: 'New Cocktail',
        slug: 'new-cocktail',
        category: 'Cocktails',
        ingredients: ['Rum', 'Mint'],
      },
    })

    expect(result.name).toEqual('New Cocktail')
    expect(result.slug).toEqual('new-cocktail')
    expect(result.category).toEqual('Cocktails')
  })

  scenario('updates a drink', async (scenario) => {
    const original = await drink({ id: scenario.drink.one.id })
    const result = await updateDrink({
      id: original.id,
      input: { name: 'Updated Cocktail' },
    })

    expect(result.name).toEqual('Updated Cocktail')
  })

  scenario('deletes a drink', async (scenario) => {
    const original = await deleteDrink({ id: scenario.drink.one.id })
    const result = await drink({ id: original.id })

    expect(result).toEqual(null)
  })
})
