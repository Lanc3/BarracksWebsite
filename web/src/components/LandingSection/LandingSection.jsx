import { Link, routes } from '@redwoodjs/router'

import Illustration from '../../../public/glow-bottom.svg'
import Particles from '../Particles/Particles'
const LandingSection = () => {
  return (
    <div className="sm:max-w-auto relative mx-auto min-h-[600px] max-w-6xl px-4  sm:px-2">
      <Particles className="absolute inset-0 z-10 w-screen" />
      <div
        className=" absolute inset-0 z-20 -mx-28 overflow-hidden rounded-b-[3rem]"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
          <img
            src={Illustration}
            className="max-w-none"
            alt="Hero Illustration"
          />
        </div>
        <div className="z-30 pb-16 pt-32 md:pb-16 md:pt-52">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6" data-aos="fade-down">
              {/* <div className="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <a
                  className="btn-sm group relative py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    API Studio is now in beta{' '}
                    <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div> */}
            </div>
            <h1
              className="h1 bg-gradient-to-r from-[#2f570d] via-[#59b905] to-[#2f570d] bg-clip-text pb-4 text-transparent"
              data-aos="fade-down"
            >
              Welcome To The New Barrakcs Website
            </h1>
            <p
              className="mb-8 text-lg text-slate-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Step into The Barracks, where every drink tells a story and every
              moment feels like a celebration – your new haven for camaraderie,
              crafted cocktails, and unforgettable memories.
            </p>
            <div
              className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn group w-full bg-gradient-to-r from-white/80 via-white to-white/80 text-slate-900 transition duration-150 ease-in-out hover:bg-white"
                  href="#0"
                >
                  Book With Us{' '}
                  <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn w-full bg-slate-900 bg-opacity-25 text-slate-200 transition duration-150 ease-in-out hover:bg-opacity-30 hover:text-white"
                  href="#0"
                >
                  <span>See Our Events</span>
                  <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingSection
