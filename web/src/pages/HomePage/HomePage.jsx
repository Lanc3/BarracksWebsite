import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BackgroundGallary from 'src/components/BackgroundGallary/BackgroundGallary'
import Clients from 'src/components/Clients/Clients'
import ContactSection from 'src/components/ContactSection/ContactSection'
import LandingSection from 'src/components/LandingSection/LandingSection'
import SliderGallary from 'src/components/SliderGallary/SliderGallary'
import BookingPriceSection from 'src/components/BookingPriceSection/BookingPriceSection'
import TeamHero from 'src/components/TeamHero/TeamHero'
const HomePage = () => {
  return (
    <div className="mb-24 ">
      <LandingSection />
      <Clients />
      <ContactSection />
      <BookingPriceSection />
      <TeamHero />
      {/* <SliderGallary /> */}
      <MetaTags title="Home" description="Home page" />
    </div>
  )
}

export default HomePage
