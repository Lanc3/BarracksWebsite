import { render } from '@redwoodjs/testing/web'

import DrinkCard from './DrinkCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DrinkCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrinkCard />)
    }).not.toThrow()
  })
})
