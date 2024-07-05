'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Particles from '../Particles/Particles'

import TestimonialImg01 from './Joanne.jpg'
import TestimonialImg02 from './Nicola.jpg'
import TestimonialImg03 from './Tristan.jpg'
import TestimonialImg04 from './Jack.webp'
import TestimonialImg05 from './aaron.jpg'
import {Link,routes} from '@redwoodjs/router'

const TeamHero = () => {

  const [active, setActive] = useState(0)
  const [autorotate, setAutorotate] = useState(true)
  const [autorotateTiming] = useState(7000)
  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement) testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])
  const items = [
    {
      img: TestimonialImg01,
      quote: "We aim to grow a comunity around The Barracks",
      name: 'Joanne Feeney',
      role: 'Duty Manager'
    },
    {
      img: TestimonialImg05,
      quote: "Shaping bartenders, one shake at a time, because excellence in mixology is not just a skill; it's a crafted journey of passion and precision.",
      name: 'Aaron Keating',
      role: 'Assistant Manager'
    },
    {
      img: TestimonialImg02,
      quote: "Mixing spirits with smiles, we craft more than cocktails – we create memories on the rocks",
      name: 'Nicola Byrne',
      role: 'Head Mixoligist/Supervisor'
    },
    {
      img: TestimonialImg03,
      quote: "At our bar, every pour is a pour-fect blend of craftsmanship and camaraderie.",
      name: 'Tristan McGrath',
      role: 'Supervisor'
    },
    {
      img: TestimonialImg04,
      quote: "Turning pixels into stories and clicks into connections, our media man paints the canvas of our brand with a digital palette of creativity.",
      name: 'Jack Dempsey',
      role: 'Floor/Media Supervisor'
    }
  ]

  const testimonials = useRef(null)

  return (
    <section>
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative pb-12 md:pb-20">
          <div className="flex w-full justify-center">
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Meet The Managment Team</h2>
          </div>
      {/* Particles animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-80 h-80 -mt-6">
          <Particles className="absolute inset-0 -z-10" quantity={10} staticity={40} />
        </div>

        {/* Carousel */}
        <div className="text-center">
          {/* Testimonial image */}
          <div className="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-20">

              {items.map((item, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  className="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                  beforeEnter={() => heightFix()}
                >
                  <img className="relative top-11 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full" src={item.img} width={126} height={126} alt={item.name} />
                </Transition>
              ))}

            </div>
          </div>
          {/* Text */}
          <div className="mb-10 transition-all duration-150 delay-300 ease-in-out">
            <div className="relative flex flex-col" ref={testimonials}>

              {items.map((item, index) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-in-out duration-500 delay-200 order-first"
                  enterFrom="opacity-0 -translate-x-4"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-out duration-300 delay-300 absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-4"
                  beforeEnter={() => heightFix()}
                >
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">{item.quote}</div>
                </Transition>
              ))}

            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center -m-1.5">

            {items.map((item, index) => (
              <button className={`z-20 btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`} key={index} onClick={() => { setActive(index); setAutorotate(false); }}>
                <span className="relative">
                  <span className="text-slate-50">{item.name}</span> <span className="text-slate-600">-</span> <span>{item.role}</span>
                </span>
              </button>
            ))}

            </div>

        </div>

      </div>
    </div>
  </section>
  )
}

export default TeamHero
