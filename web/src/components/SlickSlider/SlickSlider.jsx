import React, { useState } from 'react'

import { config } from 'react-spring'
import Carousel from 'react-spring-3d-carousel'

import CurvedText from '../CurvedText/CurvedText'
const getTouches = (evt) => {
  return evt.touches || evt.originalEvent.touches // browser API
}
const formatDateToDayAndMonth = (inputDate) => {
  // Parse the input date string
  // Parse the input date string
  const date = new Date(inputDate)
  if (!inputDate) {
    return ''
  }
  // Get the day of the month, month name, and day of the week
  const dayOfMonth = date.getDate()
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthName = monthNames[date.getMonth()]
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' })

  // Determine the appropriate suffix for the day of the month
  let daySuffix
  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
    daySuffix = 'st'
  } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
    daySuffix = 'nd'
  } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
    daySuffix = 'rd'
  } else {
    daySuffix = 'th'
  }

  return `${dayOfWeek}, ${dayOfMonth}${daySuffix} ${monthName}`
}
const SlickSlider = ({ EventsList }) => {
  const [goToSlide, setGoToSlide] = useState(0)
  const [offsetRadius, setOffsetRadius] = useState(2)
  const [showNavigation, setShowNavigation] = useState(true)
  const [enableSwipe, setEnableSwipe] = useState(true)
  const [configType, setConfigType] = useState(config.gentle)
  const [xDown, setXDown] = useState(null)
  const [yDown, setYDown] = useState(null)
  const [currentDay, setCurrentDay] = useState(EventsList[0].day)
  const [currentName, setCurrentName] = useState(' ')
  const [currentLocation, setCurrentLocation] = useState(' ')
  const [currentDetails, setCurrentDetails] = useState(' ')
  const [currentDate, setCurrentDate] = useState('')
  const setData = (index, slide) => {
    setGoToSlide(index)
    setCurrentDay(slide.day)
    setCurrentName(slide.name)
    setCurrentLocation(slide.location)
    setCurrentDetails(slide.details)
    setCurrentDate(slide.date)
  }

  const slides = EventsList.map((slide, index) => ({
    ...slide,
    onClick: () => setData(index, slide),
  }))
  console.log(currentDay)
  const handleTouchStart = (evt) => {
    if (!enableSwipe) {
      return
    }

    const firstTouch = getTouches(evt)[0]
    setXDown(firstTouch.clientX)
    setYDown(firstTouch.clientY)
  }

  const handleTouchMove = (evt) => {
    if (!enableSwipe || (!xDown && !yDown)) {
      return
    }

    let xUp = evt.touches[0].clientX
    let yUp = evt.touches[0].clientY

    let xDiff = xDown - xUp
    let yDiff = yDown - yUp

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1)
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1)
      }
      setXDown(null)
      setYDown(null)
    }
  }

  return (
    <div>
      <div className="align-center flex w-full items-center justify-center">
        {/* <CurvedText
  text={currentDay}
  objectSize={300} // diameter of the circle to wrap the text around
  spacing={52} // padding between the circle and text
  offset={80} // ammount of space for text, make this bigger to stop larger text from being cropped
  overlap={true} // sets the bottom margin to negative so that the text is centered around the object
/> */}
      </div>
      <div
        className="flex h-[32rem]  w-full pb-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="align-center ml-6  flex h-[32rem] w-full items-center justify-center">
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={false}
            animationConfig={configType}
          />
        </div>
      </div>
      {/* <div className="flex flex-row">
        <div className="align-center flex w-full flex-col items-center justify-center">
          <u>Act Date</u>
          <p className="text-3xl text-[#35B8DF]">
            {formatDateToDayAndMonth(currentDate)}
          </p>
        </div>
        <div className="align-center flex w-full flex-col items-center justify-center">
          <u>Act Location</u>
          <p className="text-3xl text-[#35B8DF]">{currentLocation}</p>
        </div>
      </div> */}
    </div>
  )
}

export default SlickSlider
