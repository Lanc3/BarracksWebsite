import { Link, routes } from '@redwoodjs/router'

const OpeningTimetable = () => {
  const openingTimes = [
    { day: 'Monday', time: 'CLOSED' },
    { day: 'Tuesday', time: 'CLOSED' },
    { day: 'Wednesday', time: '5 p.m – 11:30 p.m.' },
    { day: 'Thursday', time: '5 p.m – 1:30 a.m.' },
    { day: 'Friday', time: '5 p.m – 2 a.m.' },
    { day: 'Saturday', time: '3 p.m – 2 a.m.' },
    { day: 'Sunday', time: '1 p.m – 2 a.m.' },
  ]

  return (
    <div
      className="mt-24 flex w-full justify-center rounded-md p-4"
      data-aos="fade-down"
    >
      <div className="flex flex-col">
        <Link className={''} to={routes.openingTimes()}>
          <h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-6 text-transparent">
            Opening Times
          </h2>
        </Link>
        <ul className="mx-auto content-center">
          {openingTimes.map((item) => (
            <li key={item.day} className="mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-0.5 text-base font-medium text-transparent">
                {item.day}:
              </span>{' '}
              <span className="text-slate-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OpeningTimetable
