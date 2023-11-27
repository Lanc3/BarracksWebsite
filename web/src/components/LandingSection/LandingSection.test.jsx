import { render } from '@redwoodjs/testing/web'

import LandingSection from './LandingSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LandingSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingSection />)
    }).not.toThrow()
  })
})
