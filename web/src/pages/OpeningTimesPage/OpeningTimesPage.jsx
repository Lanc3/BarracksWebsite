import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TabbedOpeningTimes from 'src/components/TabbedOpeningTimes/TabbedOpeningTimes'
const OpeningTimesPage = () => {
  const openingTimes = [
    { area: 'Main Bar', timeArray: [
      { day: 'Monday', time: '4 p.m – 2 a.m.' },
      { day: 'Tuesday', time: '4 p.m – 2 a.m.' },
      { day: 'Wednesday', time: '4 p.m – 2 a.m.' },
      { day: 'Thursday', time: '4 p.m – 1:30 a.m.' },
      { day: 'Friday', time: '12 p.m – 2 a.m.' },
      { day: 'Saturday', time: '3 p.m – 2 a.m.' },
      { day: 'Sunday', time: '3 p.m – 2 a.m.' },
    ] },
    { area: 'Gatehouse Bar', timeArray: [
      { day: 'Monday', time: '4 p.m – 2 a.m.' },
      { day: 'Tuesday', time: '4 p.m – 2 a.m.' },
      { day: 'Wednesday', time: '4 p.m – 2 a.m.' },
      { day: 'Thursday', time: '4 p.m – 1:30 a.m.' },
      { day: 'Friday', time: '12 p.m – 2 a.m.' },
      { day: 'Saturday', time: '3 p.m – 2 a.m.' },
      { day: 'Sunday', time: '3 p.m – 2 a.m.' },
    ] },
    { area: 'Rabbit Hole (pool)', timeArray: [
      { day: 'Monday', time: '4 p.m – 2 a.m.' },
      { day: 'Tuesday', time: '4 p.m – 2 a.m.' },
      { day: 'Wednesday', time: '4 p.m – 2 a.m.' },
      { day: 'Thursday', time: '4 p.m – 1:30 a.m.' },
      { day: 'Friday', time: '12 p.m – 2 a.m.' },
      { day: 'Saturday', time: '3 p.m – 2 a.m.' },
      { day: 'Sunday', time: '3 p.m – 2 a.m.' },
    ] },
    // Add more days as needed
  ];
  return (
    <div className='h-[800px]'>
      <h1 className="text-4xl font-bold mb-4 justify-center w-full flex text-white"></h1>
      <TabbedOpeningTimes openingTimes={openingTimes} />
    </div>
  )
}

export default OpeningTimesPage
