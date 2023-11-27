import { render } from '@redwoodjs/testing/web'

import BackgroundGallary from './BackgroundGallary'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BackgroundGallary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BackgroundGallary />)
    }).not.toThrow()
  })
})
