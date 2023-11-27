// web/src/components/Gallery/Gallery.js
import { useState, useEffect } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'

import Logo1 from '../../../public/g1.jpg'
import Logo2 from '../../../public/g2.jpg'
import Logo3 from '../../../public/g3.jpg'
import Logo from '../../../public/logo.png'
const images = [
  // Add your image URLs here

  Logo1,
  Logo2,
]
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


const BackgroundGallary = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000) // Change images every 3 seconds (adjust as needed)

    return () => clearInterval(interval)
  }, [])

  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    )
  }

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  return (
    <div className="static -mt-28 h-screen w-screen">
      <button
        onClick={previousImage}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform bg-black  bg-opacity-50 p-2 text-white hover:bg-opacity-70"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      <AnimatePresence initial={false}>
        {images.map(
          (image, index) =>
            index === currentImage && (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="absolute z-50 max-h-screen w-full"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.7 }}
              />
            )
        )}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundGallary
