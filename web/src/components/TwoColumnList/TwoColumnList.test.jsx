import { render } from '@redwoodjs/testing/web'

import TwoColumnList from './TwoColumnList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TwoColumnList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwoColumnList />)
    }).not.toThrow()
  })
})
