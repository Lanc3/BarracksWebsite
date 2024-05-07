// web/src/components/TabbedComponent.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './main.css'
const TabbedComponent = ({openingTimes}) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const openingTimesMain = [
  { day: 'Monday', time: 'CLOSED' },
  { day: 'Tuesday', time: 'CLOSED' },
  { day: 'Wednesday', time: 'CLOSED' },
  { day: 'Thursday', time: '4 p.m – 1:30 a.m.' },
  { day: 'Friday', time: '12 p.m – 2 a.m.' },
  { day: 'Saturday', time: '3 p.m – 2 a.m.' },
  { day: 'Sunday', time: '3 p.m – 2 a.m.' },
];
  const openingTimesCourtyard = [
    { day: 'Monday', time: 'CLOSED' },
    { day: 'Tuesday', time: 'CLOSED' },
    { day: 'Wednesday', time: 'CLOSED' },
    { day: 'Thursday', time: 'CLOSED' },
    { day: 'Friday', time: 'CLOSED' },
    { day: 'Saturday', time: '8 p.m – 2 a.m.' },
    { day: 'Sunday', time: 'CLOSED' },
  ];
  const openingTimesRabit = [
    { day: 'Monday', time: 'CLOSED' },
    { day: 'Tuesday', time: 'CLOSED' },
    { day: 'Wednesday', time: 'CLOSED' },
    { day: 'Thursday', time: '4 p.m – 10 p.m.' },
    { day: 'Friday', time: '12 p.m – 10 p.m.' },
    { day: 'Saturday', time: '3 p.m – 10 p.m.' },
    { day: 'Sunday', time: '3 p.m – 10 p.m.' },
  ];
  const contentVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabbed-component px-8">
       <div className="flex space-x-4 justify-center">
         {openingTimes.map((item, index) => (
           <motion.div
             key={item.time + item.day}
             className={`cursor-pointer p-4 rounded-md ${
              activeTab === index ? 'text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5 underline' : 'text-white'
             }`}
             onClick={() => handleTabClick(index)}
             whileHover={{ scale: 1.05 }}
           >
             {item.area}
           </motion.div>
         ))}
       </div>
      <div className="tab-content">
      {activeTab === 0 && <div className="p-4 rounded-md flex w-full justify-center" data-aos="fade-down">
      <div className='flex flex-col'>
      <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6 text-center">Gatehouse Opening Times</h2>
      <ul className='content-center mx-auto'>
        {openingTimesCourtyard.map((item) => (
          <li key={item.time + item.day} className="mb-2">
            <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{item.day}:</span>{' '}
            <span className="text-slate-500">{item.time}</span>
          </li>
        ))}
      </ul>
      </div>

    </div>}
    {activeTab === 1 && <div className="p-4 rounded-md flex w-full justify-center" data-aos="fade-down">
      <div className='flex flex-col'>
      <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6 text-center">Main Bar Opening Times</h2>
      <ul className='content-center mx-auto'>
        {openingTimesMain.map((item) => (
          <li key={item.time + item.day} className="mb-2">
            <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{item.day}:</span>{' '}
            <span className="text-slate-500">{item.time}</span>
          </li>
        ))}
      </ul>
      </div>

    </div>}
    {activeTab === 2 && <div className="p-4 rounded-md flex w-full justify-center" data-aos="fade-down">
      <div className='flex flex-col'>
      <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6 flex text-center">Pool Room Opening Times</h2>
      <ul className='content-center mx-auto'>
        {openingTimesRabit.map((item) => (
          <li key={item.day} className="mb-2">
            <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{item.day}:</span>{' '}
            <span className="text-slate-500">{item.time}</span>
          </li>
        ))}
      </ul>
      </div>

    </div>}
        {/* Add more content for other tabs */}
      </div>
    </div>
  );
};

export default TabbedComponent;


// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const TabbedOpeningTimes = ({ openingTimes }) => {
//   const [selectedTab, setSelectedTab] = useState(0);



//   const handleTabClick = (index) => {
//     setSelectedTab(index);
//   };

//   return (
//     <div>
//       <div className="flex space-x-4 justify-center">
//         {openingTimes.map((item, index) => (
//           <motion.div
//             key={item.area}
//             className={`cursor-pointer p-4 rounded-md ${
//               selectedTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
//             }`}
//             onClick={() => handleTabClick(index)}
//             whileHover={{ scale: 1.05 }}
//           >
//             {item.area}
//           </motion.div>
//         ))}
//       </div>
//       <div className="min-w-[600px]">

//       </div>
//     </div>
//   );
// };

// export default TabbedOpeningTimes;
