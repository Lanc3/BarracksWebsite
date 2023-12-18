import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="bottom-0 mx-auto  overflow-hidden bg-gradient-to-t from-[#693D97]">
      <nav className="flex flex-wrap justify-center ">
        <div className="px-5 py-2">
          <Link
            to={routes.events()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            Events
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            to={routes.openingTimes()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            Opening Times
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            to={routes.aboutus()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            About
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            to={routes.contactus()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            Contact
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            to={routes.roadmap()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            Roadmap
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link
            to={routes.aboutus()}
            className="col-span-1 inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text p-4 pb-3 font-medium text-transparent transition duration-300 ease-in-out hover:scale-110 hover:text-[#35B8DF]"
          >
            Privacy & Terms
          </Link>
        </div>
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/thebarracks.carlow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#78BE37" />
        </a>
        <a
          href="https://www.instagram.com/the_barracks_carlow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="#78BE37" size="xl" />
        </a>
        <a
          href="https://twitter.com/Barracks_Carlow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} color="#78BE37" size="xl" />
        </a>

        <a
          href="https://www.tiktok.com/@the_barracks_carlow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} color="#78BE37" size="xl" />
        </a>
      </div>
      <p className="mt-8 text-center text-base leading-6 text-gray-400">
        © 2023 The Barracks, Built by Expansion.ie.
      </p>
    </div>
  )
}

export default Footer
