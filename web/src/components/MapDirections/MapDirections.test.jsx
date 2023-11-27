import { render } from '@redwoodjs/testing/web'

import MapDirections from './MapDirections'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MapDirections', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapDirections />)
    }).not.toThrow()
  })
})
