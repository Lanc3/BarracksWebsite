import './index.css'
import React, { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TwoColumnList from '../TwoColumnList/TwoColumnList'
import drink from '../../../public/coup.svg'
const MenuItem = ({ name, blurb, ingrediants }) => {

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once when it comes into view
    threshold: 0.2, // Adjust this threshold as needed
  })
  const controls = useAnimation()
  useEffect(() => {
    console.log('hit')
    if (inView) {
      controls.start({
        x: [0, -10, 5, -15, 0],
        rotate: [0, -5, 5, -5, 0], // Horizontal shake animation
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 1], // Keyframes for the animation
          repeat: Infinity, // Loop the animation
        },
      })
    }
  }, [inView, controls])

  return (
    <div className="m-4 p-4" ref={ref}>
      <div className="">
        <div className="grid grid-cols-2  ">
          <div className="grid-row-2 grid gap-4  rounded-b-lg rounded-l-lg   ">
          <div className="grid grid-rows-1 md:grid-rows-6 ">
              <div className="row-span-1 md:row-span-1" >

              </div>
              <div className="row-span-5 md:row-span-5 bg-[#693D97] rounded-l-lg">
              <div className="grid grid-rows-3 gap-4 h-full">
                  <div className="row-span-1 flex w-full justify-center">
                    <p className="p-2 text-2xl">{name}</p>
                  </div>
                  <div className="row-span-1 flex w-full justify-center">
                    <p className="p-2">{blurb}</p>
                  </div>
                  <div className="row-span-1 flex w-full justify-center">
                    <div className="flex w-full flex-col">
                    <p className="flex w-full justify-center">ingrediants</p>
                    <TwoColumnList items={ingrediants} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

    <div className="grid grid-rows-1 md:grid-rows-6 ">
            <div className="row-span-1 md:row-span-1 bg-pink-500" style={{
                clipPath: 'polygon(23% 100%, 66% 100%, 30% 0%)'
              }}></div>
  <div className="row-span-5 md:row-span-5 bg-[#693D97] rounded-r-lg">
  <div
              className="bg-pink-500"
              style={{
                clipPath: 'polygon(23% 0%, 66% 0%, 92% 19%, 30% 100%, 0 67%)',
                height: '36rem',
              }}
            >
<div className="flex w-full items-center justify-center ">
                <motion.img
                  className=" max-w-s "
                  alt="e"
                  src={drink}
                  animate={controls}
                ></motion.img>
              </div>
    </div>
  </div>
</div>

          {/* <div className="rounded-b-lg ">
            <div
              className="bg-pink-500"
              style={{
                clipPath: 'polygon(21% 17%, 85% 0, 69% 75%, 30% 95%)',
                height: '36rem',
              }}
            >
              <div className="flex w-full items-center justify-center p-24">
                <motion.img
                  className=" max-w-xs"
                  alt="e"
                  src={drink}
                  animate={controls}
                ></motion.img>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
