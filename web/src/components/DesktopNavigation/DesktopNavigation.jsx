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
      className="lg:visable hidden gap-5 text-sm lg:flex lg:items-center"
      initial={{ opacity: 1 }}
      animate={controls}
    >
      <nav className="sticky top-0 z-50 w-screen overflow-hidden   ">
        <div className="float-left flex">
          <div className="pl-4 sm:hidden">
            <Link to={routes.home()}>
              <img src={Logo} className="w-10 rounded-full" alt="" />
            </Link>
          </div>
        </div>

        {/* Add your header content here */}
        <div className="font-general-medium right-0 m-0 mt-5 hidden items-center justify-center p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none">
          <div className="grid max-h-16 grid-cols-2 gap-4 ">
            <div className="float-left w-2/3">
              <Link to={routes.home()}>
                <AnimatedLogo />
              </Link>
            </div>
            <div className="col-span-1 mr-6 grid h-32 max-h-16 grid-cols-5 gap-4">
              <div className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.events()}>
                  <p className="whitespace-nowrap">Events</p>
                </Link>
              </div>
              <div className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.menu()}>
                  <p className="whitespace-nowrap">Menu</p>
                </Link>
              </div>
              <div className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.aboutus()}>
                  <p className="whitespace-nowrap">About Us</p>
                </Link>
              </div>
              <div className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.contactus()}>
                  <p className="whitespace-nowrap">Contact Us</p>
                </Link>
              </div>
              <div className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]">
                <Link to={routes.roadmap()}>
                  <p className="whitespace-nowrap">Roadmap</p>
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
