import { render } from '@redwoodjs/testing/web'

import BookingPriceSection from './BookingPriceSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BookingPriceSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookingPriceSection />)
    }).not.toThrow()
  })
})
