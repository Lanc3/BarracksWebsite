'use client'

import { useEffect } from 'react'

import Client01 from '/BrendanText.svg'
import Client02 from '/GintyText.svg'
import Client03 from '/afterdarkText.svg'
import Client04 from '/morText.svg'
import Client05 from '/Mini.svg'
import Client06 from '/mossyText.svg'
import Client07 from '/dooleysText.svg'
import Client08 from '/jhonnyText.svg'
import Client09 from '/darraghText.svg'
// Import Swiper
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'

import Particles from '../Particles/Particles'
import 'swiper/css'
Swiper.use([Autoplay])

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute ">
          <Particles className="absolute inset-0 left-0 z-10" quantity={5} />
        </div>
        <div className="flex w-full justify-center">
          <h1
            className="h2 mt-6 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent"
            data-aos="fade-down"
          >
            Our House Acts
          </h1>
        </div>
        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:w-32 before:bg-gradient-to-r before:from-slate-900 after:pointer-events-none after:absolute after:inset-0 after:left-auto after:z-10 after:w-32 after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper select-none items-center !ease-linear">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client01}
                    alt="Client 01"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client02}
                    alt="Client 02"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    className="mt-1"
                    src={Client03}
                    alt="Client 03"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client04}
                    alt="Client 04"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client05}
                    alt="Client 05"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client06}
                    alt="Client 06"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client07}
                    alt="Client 07"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    src={Client08}
                    alt="Client 08"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <img
                    className="mt-2"
                    src={Client09}
                    alt="Client 09"
                    width={150}
                    height={150}
                  />
                </div>
                {/* <div className="swiper-slide !w-auto">
                  <img
                    className="mt-2"
                    src={Client10}
                    alt="Client 10"
                    width={150}
                    height={150}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
