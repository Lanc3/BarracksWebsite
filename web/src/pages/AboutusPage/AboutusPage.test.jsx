import { render } from '@redwoodjs/testing/web'

import AboutusPage from './AboutusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutusPage />)
    }).not.toThrow()
  })
})
