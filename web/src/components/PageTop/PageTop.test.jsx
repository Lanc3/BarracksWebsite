import { render } from '@redwoodjs/testing/web'

import PageTop from './PageTop'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageTop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageTop />)
    }).not.toThrow()
  })
})
