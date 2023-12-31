import React from 'react'

import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import FullCalendar from '@fullcalendar/react'
import './main.css'
const EventCalendar = ({ EventsList }) => {
  return (
    <div className="" id="backdrop">
      <FullCalendar
        className=""
        id={'backdrop'}
        plugins={[dayGridPlugin]}
        eventBorderColor="#35b8df"
        initialView="dayGridMonth"
        events={EventsList.map((event) => ({
          title: event.name,
          date: event.date,
          className: 'highlighted-event ', // Add a CSS class for highlighted events
        }))}
      />
    </div>
  )
}
export default EventCalendar
