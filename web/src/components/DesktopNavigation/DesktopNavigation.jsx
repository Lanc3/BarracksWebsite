import { useState } from 'react'

import { faBars, faCaretUp } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import Logo from '../../../public/logo.png'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import MoblieNavigation from '../MobileNavigation/MobileNavigation'

const DesktopNavigation = () => {
  const controls = useAnimation()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <motion.header
      className=" lg:visable hidden gap-5 text-sm md:hidden lg:flex lg:items-center"
      initial={{ opacity: 1 }}
      animate={controls}
    >
      <nav className="sticky top-0 z-50 w-screen ">
        <div className="float-left flex">
          <div className="pl-4 sm:hidden">
            <Link to={routes.home()}>
              <img src={Logo} className="w-10 rounded-full" alt="" />
            </Link>
          </div>
        </div>

        {/* Add your header content here */}
        <div className="font-general-medium right-0 m-0 mt-5 items-center justify-center p-5 sm:ml-4 sm:mt-3 sm:flex sm:p-0 ">
          <div className="grid max-h-16 grid-cols-2 ">
            <div className="float-left w-2/3">
              <Link to={routes.home()}>
                <AnimatedLogo />
              </Link>
            </div>
            <div className="col-span-1 mr-6 grid h-32 max-h-16 grid-cols-6 gap-4">
            <div className="h5 justify-left col-span-1 inline-flex bg-gradient-to-r from-green-500 to-green-200  bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.home()}>
                  <p className="ml-6 whitespace-nowrap pl-2 font-extrabold">
                    Home
                  </p>
                </Link>
              </div>
              <div className="h5 justify-left col-span-1 inline-flex bg-gradient-to-r from-green-500 to-green-200  bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.events()}>
                  <p className="ml-6 whitespace-nowrap pl-2 font-extrabold">
                    Events
                  </p>
                </Link>
              </div>
              <div className="h5 justify-left col-span-1 inline-flex  bg-gradient-to-r from-green-500 to-green-200 bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.openingTimes()}>
                  <p className="whitespace-nowrap font-extrabold">Open Times</p>
                </Link>
              </div>
              <div className="h5 justify-left col-span-1 inline-flex  bg-gradient-to-r from-green-500 to-green-200  bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.aboutus()}>
                  <p className="whitespace-nowrap font-extrabold">About Us</p>
                </Link>
              </div>
              <div className="h5 justify-left col-span-1 inline-flex  bg-gradient-to-r from-green-500 to-green-200  bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.contactus()}>
                  <p className="whitespace-nowrap font-extrabold">Contact Us</p>
                </Link>
              </div>
              <div className="h5 justify-left col-span-1 inline-flex  bg-gradient-to-r from-green-500 to-green-200 bg-clip-text pb-3 text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.roadmap()}>
                  <p className="whitespace-nowrap font-extrabold">Roadmap</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default DesktopNavigation
