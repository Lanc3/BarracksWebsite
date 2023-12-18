import { render } from '@redwoodjs/testing/web'

import OpeningTimesPage from './OpeningTimesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OpeningTimesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpeningTimesPage />)
    }).not.toThrow()
  })
})
