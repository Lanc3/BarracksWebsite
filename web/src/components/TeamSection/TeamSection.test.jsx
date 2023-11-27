import { render } from '@redwoodjs/testing/web'

import TeamSection from './TeamSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamSection />)
    }).not.toThrow()
  })
})
