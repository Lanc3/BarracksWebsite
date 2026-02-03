import { useState, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import PageTop from 'src/components/PageTop/PageTop'

const OpeningTimesPage = () => {
  const [currentDay, setCurrentDay] = useState('')
  const [currentHour, setCurrentHour] = useState(0)

  useEffect(() => {
    const now = new Date()
    setCurrentDay(now.toLocaleDateString('en-US', { weekday: 'long' }))
    setCurrentHour(now.getHours())
  }, [])

  const venues = [
    {
      name: 'Main Bar',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description: 'Our main indoor bar and dancefloor area',
      hours: [
        { day: 'Monday', time: 'CLOSED', open: null, close: null },
        { day: 'Tuesday', time: 'CLOSED', open: null, close: null },
        { day: 'Wednesday', time: '5 p.m – 11:30 p.m.', open: 17, close: 23.5 },
        { day: 'Thursday', time: '5 p.m – 1:30 a.m.', open: 17, close: 25.5 },
        { day: 'Friday', time: '5 p.m – 2 a.m.', open: 17, close: 26 },
        { day: 'Saturday', time: '3 p.m – 2 a.m.', open: 15, close: 26 },
        { day: 'Sunday', time: '2 p.m – 2 a.m.', open: 14, close: 26 },
      ],
    },
    {
      name: 'Gatehouse Bar',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      description: 'Outdoor courtyard with DJ booth',
      hours: [
        { day: 'Monday', time: 'CLOSED', open: null, close: null },
        { day: 'Tuesday', time: 'CLOSED', open: null, close: null },
        { day: 'Wednesday', time: 'CLOSED', open: null, close: null },
        { day: 'Thursday', time: 'CLOSED', open: null, close: null },
        { day: 'Friday', time: 'CLOSED', open: null, close: null },
        { day: 'Saturday', time: '8 p.m – 2 a.m.', open: 20, close: 26 },
        { day: 'Sunday', time: 'CLOSED', open: null, close: null },
      ],
    },
    {
      name: 'Rabbit Hole',
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description: 'Pool room & games area',
      hours: [
        { day: 'Monday', time: 'CLOSED', open: null, close: null },
        { day: 'Tuesday', time: 'CLOSED', open: null, close: null },
        { day: 'Wednesday', time: '5 p.m – 11:30 p.m.', open: 17, close: 23.5 },
        { day: 'Thursday', time: '5 p.m – 10 p.m.', open: 17, close: 22 },
        { day: 'Friday', time: '5 p.m – 10 p.m.', open: 17, close: 22 },
        { day: 'Saturday', time: '3 p.m – 10 p.m.', open: 15, close: 22 },
        { day: 'Sunday', time: '3 p.m – 10 p.m.', open: 15, close: 22 },
      ],
    },
  ]

  // Check if a venue is currently open
  const isVenueOpen = (venue) => {
    const todayHours = venue.hours.find((h) => h.day === currentDay)
    if (!todayHours || todayHours.time === 'CLOSED') return false

    // Handle hours that go past midnight (close > 24)
    if (todayHours.open !== null && todayHours.close !== null) {
      if (
        currentHour >= todayHours.open &&
        currentHour < Math.min(todayHours.close, 24)
      ) {
        return true
      }
      // For late night hours (after midnight), check if we're in the early morning of the next day
      if (todayHours.close > 24 && currentHour < todayHours.close - 24) {
        return true
      }
    }
    return false
  }

  // Get overall venue status
  const getOverallStatus = () => {
    const openVenues = venues.filter((v) => isVenueOpen(v))
    return {
      isOpen: openVenues.length > 0,
      openVenues: openVenues.map((v) => v.name),
    }
  }

  const status = getOverallStatus()

  return (
    <>
      <MetaTags
        title="Opening Times"
        description="Check the opening hours for The Barracks - Main Bar, Gatehouse Bar, and Rabbit Hole Pool Room. Plan your visit to Carlow's premier late bar."
      />

      <div className="h-18" />
      {/* Main Content */}
      <div className="container mx-auto -mt-8 px-4 pb-16">
        {/* Current Status Banner */}
        <div
          className={`mb-8 rounded-2xl p-6 ${
            status.isOpen
              ? 'border border-green-500/30 bg-gradient-to-r from-green-900/50 to-green-800/30'
              : 'border border-red-500/30 bg-gradient-to-r from-red-900/50 to-red-800/30'
          }`}
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center">
            <div
              className={`mr-3 h-4 w-4 rounded-full ${
                status.isOpen ? 'animate-pulse bg-green-500' : 'bg-red-500'
              }`}
            />
            <div className="text-center">
              <p
                className={`text-xl font-bold ${status.isOpen ? 'text-green-300' : 'text-red-300'}`}
              >
                {status.isOpen
                  ? "We're Currently Open"
                  : "We're Currently Closed"}
              </p>
              {status.isOpen && status.openVenues.length > 0 && (
                <p className="mt-1 text-sm text-slate-400">
                  Open now: {status.openVenues.join(', ')}
                </p>
              )}
              {!status.isOpen && (
                <p className="mt-1 text-sm text-slate-400">
                  Check below for our regular opening hours
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Venue Cards Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {venues.map((venue, index) => (
            <div
              key={venue.name}
              className="hover:bg-gray-750 rounded-2xl bg-gray-800 p-6 transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Header */}
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  {venue.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{venue.name}</h2>
                  <p className="text-sm text-slate-400">{venue.description}</p>
                </div>
              </div>

              {/* Status Indicator */}
              <div
                className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                  isVenueOpen(venue)
                    ? 'border border-green-500/30 bg-green-900/30 text-green-400'
                    : 'border border-gray-600/30 bg-gray-700/50 text-gray-400'
                }`}
              >
                <div
                  className={`mr-2 h-2 w-2 rounded-full ${
                    isVenueOpen(venue) ? 'bg-green-400' : 'bg-gray-500'
                  }`}
                />
                {isVenueOpen(venue) ? 'Open Now' : 'Closed'}
              </div>

              {/* Hours List */}
              <div className="space-y-2">
                {venue.hours.map((item) => {
                  const isToday = item.day === currentDay
                  const isClosed = item.time === 'CLOSED'

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                        isToday
                          ? 'border border-purple-500/30 bg-purple-900/30'
                          : ''
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isToday
                            ? 'text-purple-300'
                            : isClosed
                              ? 'text-gray-500'
                              : 'bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent'
                        }`}
                      >
                        {item.day}
                        {isToday && (
                          <span className="ml-2 rounded-full bg-purple-500 px-2 py-0.5 text-xs text-white">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={
                          isClosed ? 'text-gray-500' : 'text-slate-300'
                        }
                      >
                        {item.time}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="rounded-2xl bg-gray-800 p-6" data-aos="fade-up">
          <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
            <svg
              className="mr-2 h-5 w-5 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Please Note
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start rounded-xl bg-gray-700/30 p-4">
              <svg
                className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="font-medium text-slate-300">Bank Holidays</p>
                <p className="text-sm text-slate-400">
                  Opening hours may vary on bank holidays and special occasions.
                </p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-gray-700/30 p-4">
              <svg
                className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="font-medium text-slate-300">Private Events</p>
                <p className="text-sm text-slate-400">
                  For private bookings or event enquiries, contact us at{' '}
                  <a
                    href="mailto:info@thebarracks.ie"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    info@thebarracks.ie
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OpeningTimesPage
