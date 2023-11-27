import { render } from '@redwoodjs/testing/web'

import Clients from './Clients'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Clients', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Clients />)
    }).not.toThrow()
  })
})
