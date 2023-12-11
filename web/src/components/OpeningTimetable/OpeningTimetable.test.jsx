import { render } from '@redwoodjs/testing/web'

import OpeningTimetable from './OpeningTimetable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpeningTimetable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpeningTimetable />)
    }).not.toThrow()
  })
})
