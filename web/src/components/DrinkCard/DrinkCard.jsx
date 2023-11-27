import "./styles.css";
import { motion, useAnimation } from 'framer-motion'

import TwoColumnList from "../TwoColumnList/TwoColumnList";
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const drinkVariants = {
  offscreen: {

  },
  onscreen: {
    x: [0, -10, 5, -15, 0],
    rotate: [10, -5, 5, -5, 10], // Horizontal shake animation
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 1], // Keyframes for the animation
          loop: Infinity, // Loop the animation
        },
  }
};
const hue = (h) => `hsl(${h}, 100%, 50%)`;

const DrinkCard = ({ icon, hueA, hueB ,title, ingrediantsList}) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.2, // Adjust this threshold as needed
  })
  const controls = useAnimation()
  useEffect(() => {

      controls.start({
        x: [0, -10, 5, -15, 0],
        rotate: [10, -5, 5, -5, 10], // Horizontal shake animation
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 1], // Keyframes for the animation
          loop: Infinity, // Loop the animation
        },
      })

  }, [inView, controls])

  return (
    <div>

      <motion.div
      className="card-container min-w-[500px] "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >

      <div className="splash "  />
        <motion.div className="card" variants={cardVariants}>

      <motion.img
                  className=" max-w-s "
                  alt="e"
                  src={icon}
                  variants={drinkVariants}
                ></motion.img>
      </motion.div>
    </motion.div>

      <div className="flex flex-col  z-10 under-card max-w-[500px] " >
        <div className="p-6">
          <motion.p animate={{ scale: [1, 1.5, 1] }}  transition={{ repeat: Infinity, duration: 2 }} className="flex  z-10 justify-center text-[#458DD5] font-bold">{title}</motion.p>
          <p className="flex w-full justify-center pt-2"><u>Ingrediants</u></p>
          <TwoColumnList items={ingrediantsList} />
        </div>
        </div>
</div>
  )
}

export default DrinkCard
