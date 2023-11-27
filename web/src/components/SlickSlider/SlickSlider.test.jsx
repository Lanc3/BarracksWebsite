import { render } from '@redwoodjs/testing/web'

import SlickSlider from './SlickSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SlickSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlickSlider />)
    }).not.toThrow()
  })
})
