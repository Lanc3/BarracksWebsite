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
const HomePage = () => {
  const images = [
    gal1,
    gal2,
    gal3,
    gal3,
    gal4,
    gal5,
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
            Atmospheric Nights Out
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
