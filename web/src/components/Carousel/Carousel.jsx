import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './main.css'

const Carousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const thumbnailRef = useRef(null)

  const totalImages = images.length

  // Get visible images for multi-image view
  const getVisibleImages = () => {
    const prev = currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    const next = currentIndex === totalImages - 1 ? 0 : currentIndex + 1
    return { prev, current: currentIndex, next }
  }

  const { prev, current, next } = getVisibleImages()

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === totalImages ? 0 : prevIndex + 1
    )
  }, [totalImages])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalImages - 1 : prevIndex - 1
    )
  }, [totalImages])

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused && !lightboxOpen) {
      const timer = setInterval(handleNext, autoPlayInterval)
      return () => clearInterval(timer)
    }
  }, [isPaused, lightboxOpen, handleNext, autoPlayInterval])

  // Scroll thumbnail into view when current index changes
  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnails = thumbnailRef.current.children
      if (thumbnails[currentIndex]) {
        thumbnails[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }, [currentIndex])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false)
      }
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrevious()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, handleNext, handlePrevious])

  // Swipe/drag handlers
  const handleDragStart = (e, info) => {
    setDragStart(info.point.x)
  }

  const handleDragEnd = (e, info) => {
    const dragDistance = info.point.x - dragStart
    const velocity = info.velocity.x

    if (dragDistance > 50 || velocity > 500) {
      handlePrevious()
    } else if (dragDistance < -50 || velocity < -500) {
      handleNext()
    }
  }

  // Progress percentage
  const progressPercent = ((currentIndex + 1) / totalImages) * 100

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Multi-image display */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* Previous Image - Hidden on mobile */}
          <div className="hidden lg:block w-1/4 shrink-0">
            <motion.img
              src={images[prev]}
              alt={`Gallery image ${prev + 1}`}
              className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg opacity-50 scale-90 cursor-pointer transition-all duration-300 hover:opacity-70"
              onClick={handlePrevious}
              whileHover={{ scale: 0.95 }}
            />
          </div>

          {/* Current/Main Image */}
          <div className="w-full md:w-3/4 lg:w-1/2 shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[current]}
                alt={`Gallery image ${current + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl cursor-pointer shadow-2xl border-2 border-purple-600/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxOpen(true)}
                whileHover={{ scale: 1.02 }}
              />
            </AnimatePresence>
          </div>

          {/* Next Image - Hidden on mobile */}
          <div className="hidden lg:block w-1/4 shrink-0">
            <motion.img
              src={images[next]}
              alt={`Gallery image ${next + 1}`}
              className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg opacity-50 scale-90 cursor-pointer transition-all duration-300 hover:opacity-70"
              onClick={handleNext}
              whileHover={{ scale: 0.95 }}
            />
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-purple-700/80 hover:bg-purple-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-purple-700/80 hover:bg-purple-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Bar and Counter */}
      <div className="mt-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Gallery</span>
          <span className="text-sm font-medium text-white">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-purple-600 to-purple-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-4 relative">
        <div
          ref={thumbnailRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800"
          style={{ scrollbarWidth: 'thin' }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? 'border-purple-500 ring-2 ring-purple-500/50'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-50"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation in lightbox */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Lightbox Image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter in lightbox */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {totalImages}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Carousel
