import { render } from '@redwoodjs/testing/web'

import AnimatedTitle from './AnimatedTitle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimatedTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimatedTitle />)
    }).not.toThrow()
  })
})
