import { render } from '@redwoodjs/testing/web'

import TabbedOpeningTimes from './TabbedOpeningTimes'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TabbedOpeningTimes', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabbedOpeningTimes />)
    }).not.toThrow()
  })
})
