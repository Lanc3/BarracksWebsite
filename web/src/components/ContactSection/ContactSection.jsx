'use client'

import { useState } from 'react'

import { Transition } from '@headlessui/react'

import { Link, routes } from '@redwoodjs/router'

import Particles from 'src/components/Particles/Particles'

import Illustration from '../../../public/glow-top.svg'
import Logo from '../../../public/logo.png'

export default function ContactSection() {
  const [tab, setTab] = useState(1)

  return (
    <section className="mb-44 rounded-t-[3rem]">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={8}
        staticity={30}
      />
      <div className="relative mx-auto max-w-6xl rounded-t-[3rem] px-4 sm:px-6">
        {/* Illustration */}
        <div
          className="pointer-events-none absolute inset-0 z-10 -mx-28 overflow-hidden rounded-t-[3rem]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-t-[3rem]">
            <img
              src={Illustration}
              className="max-w-none rounded-[3rem]"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pb-12 pt-16 md:pb-20 md:pt-52">
          <div>
            {/* Section content */}
            <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
              {/* Content */}
              <div
                className="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2"
                data-aos="fade-down"
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 font-medium text-transparent">
                    The Barracks Bookings For Your Party
                  </div>
                </div>
                <h3 className="h3 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-3 text-transparent">
                  Simplify Your Booking,<br/> Call Or Email Us
                </h3>
                <p className="mb-8 text-lg text-slate-400">
                  We provide diffrent levels of services for your bookings,
                  Please enquire with us to customize your experience and to
                  avail of any services or discounts.
                </p>
                <div className="mt-8 max-w-xs space-y-2 max-md:mx-auto">
                  <button
                    className={`flex w-full items-center rounded border bg-slate-800/25 px-3 py-2 text-sm font-medium text-slate-50 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 1
                        ? 'border-slate-700 opacity-50'
                        : 'border-purple-700 shadow shadow-purple-500/25'
                    }`}
                    onClick={() => setTab(1)}
                  >
                    <svg
                      className="mr-3 shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <a className="" href="mailto:info@thebarracks.ie">
                      Email Us Now
                    </a>
                  </button>
                  <button
                    className={`flex w-full items-center rounded border bg-slate-800/25 px-3 py-2 text-sm font-medium text-slate-50 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 2
                        ? 'border-slate-700 opacity-50'
                        : 'border-purple-700 shadow shadow-purple-500/25'
                    }`}
                    onClick={() => setTab(2)}
                  >
                    <svg
                      className="mr-3 shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <a href="tel:+0599141781">Call Us Now</a>
                  </button>
                  <button
                    className={`flex w-full items-center rounded border bg-slate-800/25 px-3 py-2 text-sm font-medium text-slate-50 transition duration-150 ease-in-out hover:opacity-100 ${
                      tab !== 3
                        ? 'border-slate-700 opacity-50'
                        : 'border-purple-700 shadow shadow-purple-500/25'
                    }`}
                    onClick={() => setTab(3)}
                  >
                    <svg
                      className="mr-3 shrink-0 fill-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                    </svg>
                    <span>See Booking Packages</span>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="md:w-5/12 lg:w-1/2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative -mt-12 py-24">
                  {/* Particles animation */}

                  <div className="flex items-center justify-center">
                    <div className="relative flex h-48 w-48 items-center justify-center">
                      {/* Halo effect */}
                      <svg
                        className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-md will-change-transform"
                        width="480"
                        height="480"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="pulse-a"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path
                            className="pulse"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-1"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-2"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                        </g>
                      </svg>
                      {/* Grid */}

                      {/* Icons */}
                      <Transition
                        show={tab === 1}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex h-28 w-28 -rotate-[14deg] items-center  justify-center ">
                          <Link to={routes.home()}>
                            <img src={Logo} className=" rounded-full" alt="" />
                          </Link>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 2}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex h-28 w-28 -rotate-[14deg] items-center  justify-center ">
                          <Link to={routes.home()}>
                            <img src={Logo} className=" rounded-full" alt="" />
                          </Link>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 3}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                         <div className="relative flex h-28 w-28 -rotate-[14deg] items-center  justify-center ">
                          <Link to={routes.home()}>
                            <img src={Logo} className=" rounded-full" alt="" />
                          </Link>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
