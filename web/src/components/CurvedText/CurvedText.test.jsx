import { render } from '@redwoodjs/testing/web'

import CurvedText from './CurvedText'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CurvedText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CurvedText />)
    }).not.toThrow()
  })
})
