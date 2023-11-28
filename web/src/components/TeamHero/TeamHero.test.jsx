import { render } from '@redwoodjs/testing/web'

import TeamHero from './TeamHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamHero />)
    }).not.toThrow()
  })
})
