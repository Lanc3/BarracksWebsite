import { render } from '@redwoodjs/testing/web'

import EventSlider from './EventSlider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventSlider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventSlider />)
    }).not.toThrow()
  })
})
