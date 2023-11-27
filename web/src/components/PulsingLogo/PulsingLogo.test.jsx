import { render } from '@redwoodjs/testing/web'

import PulsingLogo from './PulsingLogo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PulsingLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PulsingLogo />)
    }).not.toThrow()
  })
})
