import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BackgroundGallary from 'src/components/BackgroundGallary/BackgroundGallary'
import BookingPriceSection from 'src/components/BookingPriceSection/BookingPriceSection'
import Carousel from 'src/components/Carousel/Carousel'
import Clients from 'src/components/Clients/Clients'
import ContactSection from 'src/components/ContactSection/ContactSection'
import LandingSection from 'src/components/LandingSection/LandingSection'
import OpeningTimetable from 'src/components/OpeningTimetable/OpeningTimetable'
import SliderGallary from 'src/components/SliderGallary/SliderGallary'
import TeamHero from 'src/components/TeamHero/TeamHero'

import gal1 from '../../../public/GAL1.webp'
import gal10 from '../../../public/GAL10.webp'
import gal11 from '../../../public/GAL11.webp'
import gal12 from '../../../public/GAL12.webp'
import gal13 from '../../../public/GAL13.webp'
import gal2 from '../../../public/GAL2.webp'
import gal3 from '../../../public/GAL3.webp'
import gal4 from '../../../public/GAL4.webp'
import gal5 from '../../../public/GAL5.webp'
import gal6 from '../../../public/GAL6.webp'
import gal7 from '../../../public/GAL7.webp'
import gal8 from '../../../public/GAL8.webp'
import gal9 from '../../../public/GAL9.webp'
import gal14 from '../../../public/gal/0001.jpg'
import gal15 from '../../../public/gal/0002.jpg'
import gal16 from '../../../public/gal/0003.jpg'
import gal17 from '../../../public/gal/0004.jpg'
import gal18 from '../../../public/gal/0005.jpg'
import gal19 from '../../../public/gal/0008.jpg'
import gal20 from '../../../public/gal/0012.jpg'
import gal21 from '../../../public/gal/0013.jpg'
import gal22 from '../../../public/gal/0014.jpg'
import gal23 from '../../../public/gal/0015.jpg'
import gal24 from '../../../public/gal/0016.jpg'
import gal25 from '../../../public/gal/0017.jpg'
import gal26 from '../../../public/gal/0018.jpg'
import gal27 from '../../../public/gal/0019.jpg'
import gal28 from '../../../public/gal/0020.jpg'
import gal29 from '../../../public/gal/0021.jpg'
import gal30 from '../../../public/gal/0022.jpg'
import gal31 from '../../../public/gal/0023.jpg'
import gal32 from '../../../public/gal/0024.jpg'
import gal33 from '../../../public/gal/0025.jpg'
const HomePage = () => {
  const images = [
    gal14,
    gal15,
    gal16,
    gal17,
    gal18,
    gal19,
    gal20,
    gal21,
    gal22,
    gal23,
    gal24.
    gal25,
    gal26,
    gal27,
    gal28,
    gal29,
    gal30,
    gal31,
    gal32,
    gal33,
    gal1,
    gal2,
    gal3,
    gal4,
    gal6,
    gal7,
    gal8,
    gal9,
    gal10,
    gal11,
    gal12,
    gal13,
  ]
  return (
    <div className="mb-24 ">
      <LandingSection />
      <Clients />
      <ContactSection />
      <div>
        <div className="flex w-full justify-center">
          <h1
            className="h2 mt-6 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-center text-transparent"
            data-aos="fade-down"
          >
            Gallary
          </h1>
        </div>
        <Carousel images={images} />
      </div>

      <BookingPriceSection />
      <TeamHero />
      <OpeningTimetable />
      {/* <SliderGallary /> */}
      <MetaTags title="Home" description="Home page" />
    </div>
  )
}

export default HomePage
