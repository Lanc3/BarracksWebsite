import { useState } from 'react'

import { faBars, faCaretUp } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import Logo from '../../../public/logo.png'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation'
import MoblieNavigation from '../MobileNavigation/MobileNavigation'
const Header = () => {
  const controls = useAnimation()
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    console.log('hit')
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }
  // Define the animation for fading out the header on scroll
  const headerFadeOut = {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3 },
    },
  }

  // Use the scrollY value to trigger the animation

  return (
    <div className="left-0 right-0 top-0 z-50 max-h-20 w-screen  border-b border-neutral-700 drop-shadow-[0_15px_15px_rgba(211,44,255,0.3)]">
      <MoblieNavigation />
      <DesktopNavigation />
    </div>
  )
}

export default Header
