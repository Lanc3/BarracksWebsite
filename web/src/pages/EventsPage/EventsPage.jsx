import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import EventCalendar from 'src/components/EventCalendar/EventCalendar'
import EventSlider from 'src/components/EventSlider/EventSlider'
import PageTop from 'src/components/PageTop/PageTop'
import Particles from 'src/components/Particles/Particles'
import SlickSlider from 'src/components/SlickSlider/SlickSlider'

import AfterDarkImage from '../../../public/AfterDarkImage.png'
import BrendanImage from '../../../public/BrendanImage.png'
import DaleBulgerImage from '../../../public/DaleImage.png'
import DarraghImage from '../../../public/DarraghImage.png'
import GintyImage from '../../../public/GintyImage.png'
import Illustration from '../../../public/glow-bottom.svg'
import JhonnyFingerImage from '../../../public/JhonnyFingersImage.png'
import MiniImage from '../../../public/MiniImage.png'
import MorImage from '../../../public/MorImage.png'
import MossyImage from '../../../public/MossyImage.png'
const EventsPage = () => {
  const EventsList = [
    {
      image: GintyImage,
      name: 'Wizard Fruit',
      date: '2023-11-02',
      details: 'All patreons must be over the age of 18',
      day: 'Thursday',
      location: 'Main Stage',
      id: 1,
      key: 1,
      content: <img src={GintyImage} alt="2" />,
    },
    {
      image: GintyImage,
      name: 'Ginty',
      date: '2023-11-04',
      details: 'details',
      day: 'Saturday',
      location: 'Courtyard',
      id: 2,
      key: 2,
      content: <img src={GintyImage} alt="3" />,
    },
    {
      image: MorImage,
      name: 'Mor',
      date: '2023-11-04',
      details: 'details',
      day: 'Saturday',
      location: 'Main Stage',
      id: 3,
      key: 3,
      content: <img src={MorImage} alt="1" />,
    },
    {
      image: AfterDarkImage,
      name: 'After Dark',
      date: '2023-11-05',
      details: 'details',
      day: 'Sunday',
      location: 'Main Stage',
      id: 4,
      key: 4,
      content: <img src={AfterDarkImage} alt="4" />,
    },
    {
      image: DarraghImage,
      name: '17 Entertainment',
      date: '2023-11-08',
      details: 'details',
      day: 'Wednesday',
      location: 'Main Stage',
      id: 5,
      key: 5,
      content: <img src={DarraghImage} alt="5" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'name',
      date: '2023-11-09',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
  ]
  return (
    <div className=" pb-12">
      <div className="md:-mt-20 sm:mt-20">
        <Particles className="absolute inset-0 z-10 w-full rounded-b-[3rem]" />
        <PageTop
          title={'Upcoming Events'}
          content={
            `Our Acts are Diffrent Every Week, Stay Tuned For Any Updates On
                Our Socials, Check Out Our Atcs Below, Click on the sides`
          }
        />

      </div>
      <div className="mt-24 origin-bottom  bg-[#693d97] bg-opacity-0 p-8 ">
        <div className="origin-bottom ">
          <div className="flex w-full flex-col pr-6">
            <AnimatedTitle title="Callendar" />
          </div>

          <EventCalendar EventsList={EventsList} />
        </div>

        {/* <div className="bg-[#693D97] p-4 mb-6">
        <p className="text-center">Get ready to groove and dance the night away with an electrifying lineup of bands and DJs that will set the stage on fire. From chart-topping artists delivering unforgettable live performances to world-class DJs spinning the latest beats, our events are a musical paradise for enthusiasts. Whether you're into rock, pop, electronic, or any genre in between, our concerts and club nights promise to keep you in the rhythm of the night. So, grab your dancing shoes and join us for an unforgettable experience with the hottest acts in town. Your next music adventure starts here!</p>
        </div> */}
      </div>
    </div>
  )
}

export default EventsPage
