import { Link, routes } from '@redwoodjs/router'

import buildingImage from '../../../public/barracks-carlow_0688.jpg'
import Illustration from '../../../public/glow-bottom.svg'
import Particles from '../Particles/Particles'
import { FaArrowRight } from "react-icons/fa6";
import Font, { Text } from 'react-font'
const LandingSection = () => {
  return (
    <div>
      <div className="">
        <img
          src={buildingImage}
          className=" absolute z-0 mx-auto max-h-[621px] min-h-[621px]  min-w-full"
          alt="Hero Illustration"
        />
      </div>

      <div className="sm:max-w-auto relative mx-auto -mt-20 min-h-[621px] max-w-6xl break-words  px-4 sm:px-2">
        <Particles className="absolute inset-0 z-10 w-screen" />

        <div
          className=" absolute inset-0 z-20 -mx-28 overflow-hidden rounded-b-[3rem] "
          aria-hidden="true"
        >
          <div className="absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/4">
            <img
              src={Illustration}
              className="max-w-none "
              alt="Hero Illustration"
            />
          </div>
          <div className="z-30 pb-16 pt-32 md:pb-16 ">
            {/* Hero content */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6" data-aos="fade-down"></div>
              <h1
                className="h1 break-words bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text px-24 pb-4 text-transparent sm:px-24"
                data-aos="fade-down"
              ><Font family='Poetsen One'>
                Welcome to <br />
                The Barracks
                </Font>
              </h1>
              <p
                className="mb-8 break-words px-32 text-lg text-slate-300 sm:px-32"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                Step into The Barracks, where every drink tells a story and
                every moment feels like a celebration – your new haven for
                camaraderie, crafted cocktails, and unforgettable memories.
              </p>
              <div
                className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div>
                  <Link
                    className="btn group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                    to={routes.contactus()}
                  >
                    Book With Us{' '}
                    <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    <FaArrowRight />
                    </span>
                  </Link>
                </div>
                {/* <div>
                  <Link
                    className="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
                    to={routes.events()}
                  >
                    <span>See Our Events</span>
                    <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    <FaArrowRight />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingSection
