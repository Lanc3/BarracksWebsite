import { useRef } from 'react'
import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'

import { Link, routes } from '@redwoodjs/router'

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import Drawer from '../Drawer/Drawer'
const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  return (
    <div
      ref={ref}
      className="sticky top-0 sm:visable float-right flex w-screen  lg:hidden md:visable lx:hidden"
    >
      <div className=" float-left flex max-h-20 w-full overflow-hidden">
        <Link to={routes.home()} className="m-2">
          <AnimatedLogo />
        </Link>
      </div>
      <div className="flex justify-center pt-4 mx-10">
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          color={'white'}
          classname=""
        />
      </div>
      <Drawer isOpen={isOpen} position={"left"}>
        <ul className="mt-2 grid gap-2">
        <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 1 / 10,
                }}
                key={'Home'}
                className="z-200 "
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.home()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Home
                  </span>
                </Link>
              </motion.li>

              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 2 / 10,
                }}
                key={'openingTimes'}
                className="z-200 "
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.openingTimes()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Opening Times
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 3 / 10,
                }}
                key={'about'}
                className="z-200 "
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.aboutus()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    About Us
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 4 / 10,
                }}
                key={'contact'}
                className="z-200 "
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.contactus()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Contact Us
                  </span>
                </Link>
              </motion.li>
              {/* <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 5 / 10,
                }}
                key={'roadmap'}
                className="z-200 "
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.roadmap()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Roadmap
                  </span>
                </Link>
              </motion.li> */}
            </ul>
    </Drawer>
      {/* <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-200 shadow-4xl fixed left-0 right-0 top-[4.5rem] border-b border-b-white/20 bg-[#693D97]  pt-0"
          >
            <ul className="mt-2 grid gap-2">
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 1 / 10,
                }}
                key={'about'}
                className="z-200 btn-sm relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.events()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Events
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 2 / 10,
                }}
                key={'about'}
                className="z-200 btn-sm relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.menu()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Menu
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 3 / 10,
                }}
                key={'about'}
                className="z-200 btn-sm relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.aboutus()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    About Us
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 4 / 10,
                }}
                key={'about'}
                className="z-200 btn-sm relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.contactus()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Contact Us
                  </span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 5 / 10,
                }}
                key={'about'}
                className="z-200 btn-sm relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
              >
                <Link
                  onClick={() => setOpen((prev) => !prev)}
                  className={
                    'btn-sm group relative w-full py-0.5 text-slate-300 shadow transition duration-150 ease-in-out [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50 hover:text-white'
                  }
                  to={routes.roadmap()}
                >
                  <span className="flex gap-1 text-lg text-white hover:relative">
                    Roadmap
                  </span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}

export default MobileNavigation
