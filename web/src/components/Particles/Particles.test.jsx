import { render } from '@redwoodjs/testing/web'

import Particles from './Particles'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Particles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Particles />)
    }).not.toThrow()
  })
})
