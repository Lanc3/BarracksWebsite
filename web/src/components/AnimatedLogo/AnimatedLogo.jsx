import React from 'react'

import { motion, useAnimation } from 'framer-motion'

import Logo from '../../../public/logo.png'
const AnimatedLogo = () => {
  const controls = useAnimation()
  const newControls = useAnimation()
  const pulseAnimation = {
    scale: [1, 1.2, 1], // Scale values for the animation
    transition: { duration: 1, repeat: Infinity, repeatDelay: 3 }, // 3-second delay and infinite repeat
  }
  const radioAnimation = {
    scale: [1, 8], // Scale values for the animation
    opacity: [1, 0],
    transition: { duration: 3, repeat: Infinity, repeatDelay: 1 }, // 3-second delay and infinite repeat
  }
  React.useEffect(() => {
    controls.start(pulseAnimation)
    newControls.start(radioAnimation)
  }, [controls])
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 1, scale: 1 }}
        animate={newControls}
        className="absolute  h-28 w-28 rounded-full border-2 border-white py-8 pointer-events-none"
      />
      <motion.div
        className="h-28 w-28 pt-1"
        initial={{ scale: 1 }} // Initial scale
        animate={controls}
      >
        <div className="pl-6 pt-2">
          <img src={Logo} className="  w-14 rounded-full mb-12" alt="" />
        </div>
      </motion.div>
    </>
  )
}

export default AnimatedLogo
