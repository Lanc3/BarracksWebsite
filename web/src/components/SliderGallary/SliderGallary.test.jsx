import { render } from '@redwoodjs/testing/web'

import SliderGallary from './SliderGallary'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SliderGallary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SliderGallary />)
    }).not.toThrow()
  })
})
