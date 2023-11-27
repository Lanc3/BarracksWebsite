import { render } from '@redwoodjs/testing/web'

import VerticalRoadmap from './VerticalRoadmap'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VerticalRoadmap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VerticalRoadmap />)
    }).not.toThrow()
  })
})
