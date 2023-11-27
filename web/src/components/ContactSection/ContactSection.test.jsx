import { render } from '@redwoodjs/testing/web'

import ContactSection from './ContactSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactSection />)
    }).not.toThrow()
  })
})
