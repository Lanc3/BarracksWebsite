// web/src/components/Gallery/Gallery.js
import { useState, useEffect } from 'react'
import ProgressBar from 'src/components/ProgressBar';
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon,ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import CurvedText from '../CurvedText/CurvedText'
import Logo1 from '../../../public/g1.jpg'
import Logo2 from '../../../public/g2.jpg'
import Logo3 from '../../../public/g3.jpg'
import Logo from '../../../public/logo.png'

import BackgroundImage from '../../../public/BackgroundActs.png'
import styles from './CurvedStyle.module.css';
import ReactCurvedText from 'react-curved-text';
const images = [
  // Add your image URLs here

  Logo1,
  Logo2,
]


const EventSlider = ({EventsList}) => {
  const [currentImage, setCurrentImage] = useState(0)



  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + EventsList.length) % EventsList.length
    )
  }

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % EventsList.length)
  }

  return (
    <div className="">
      <AnimatePresence initial={false}>
        {EventsList.map(
          (data, index) =>
            index === currentImage && (
              // eslint-disable-next-line react/jsx-key
              <div>
              <ProgressBar arraySize={EventsList.length} currentIndex={currentImage+1} />
              <div className="flex justify-center">
              <ChevronUpIcon
                    className="text-[#693D97] cursor-pointer h-12 w-12 rounded-full bg-white mb-2"
                    onClick={previousImage}
                  />
                  </div>
                <div className={`${styles['cloud-background']} flex flex-col bg-act-pattern  items-center justify-center align-center`}>

                <div className="  ">
                  <div className="flex flex-col items-center">
                  <motion.div
                  key={index}
                  className=" z-auto flex flex-col  items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0} }
                  transition={{ duration: 1.5 }}
                >
                  <CurvedText
  text={data.day}
  objectSize={300} // diameter of the circle to wrap the text around
  spacing={52} // padding between the circle and text
  offset={80} // ammount of space for text, make this bigger to stop larger text from being cropped
  overlap={true} // sets the bottom margin to negative so that the text is centered around the object
/>
                    <p>{data.date}</p>
                    </motion.div>
                  </div>
                  <div className="w-auto mx-8">
                <motion.img
                  key={index}
                  src={data.image}
                  alt={`Image ${index + 1}`}
                  className=""
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  exit={{ opacity: 0, y: '-100%' }}
                  transition={{ duration: 0.7 }}
                />
                </div>
                <div className="flex flex-col items-center">
                <motion.div
                  key={index}
                  className=" z-auto flex flex-col  items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0} }
                  transition={{ duration: 0.7 }}
                >
                    <p className="text-2xl">{data.location}</p>
                    </motion.div>
                  </div>
                </div>
                </div>
                <div className="flex  items-center align-center justify-center mt-2">
              <ChevronDownIcon
                    className="text-[#693D97] cursor-pointer h-12 w-12 rounded-full bg-white mb-2"
                    onClick={nextImage}
                  />
                  </div>
              </div>
            )
        )}
      </AnimatePresence>
    </div>
  )
}

export default EventSlider
