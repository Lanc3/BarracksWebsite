const OpeningTimetable = () => {
  const openingTimes = [
    { day: 'Monday', time: '4 p.m – 2 a.m.' },
    { day: 'Tuesday', time: '4 p.m – 2 a.m.' },
    { day: 'Wednesday', time: '4 p.m – 2 a.m.' },
    { day: 'Thursday', time: '4 p.m – 1:30 a.m.' },
    { day: 'Friday', time: '12 p.m – 2 a.m.' },
    { day: 'Saturday', time: '3 p.m – 2 a.m.' },
    { day: 'Sunday', time: '3 p.m – 2 a.m.' },
  ];

  return (
    <div className="p-4 rounded-md flex w-full justify-center">
      <div className='flex flex-col'>
      <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Opening Times</h2>
      <ul className='content-center mx-auto'>
        {openingTimes.map((item) => (
          <li key={item.day} className="mb-2">
            <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{item.day}:</span>{' '}
            <span className="text-slate-500">{item.time}</span>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
};

export default OpeningTimetable;
