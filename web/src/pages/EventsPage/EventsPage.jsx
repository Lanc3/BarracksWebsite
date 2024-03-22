import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import EventCalendar from 'src/components/EventCalendar/EventCalendar'
import PageTop from 'src/components/PageTop/PageTop'
import Particles from 'src/components/Particles/Particles'
import AfterDarkImage from '../../../public/AfterDarkImage.png'
import DarraghImage from '../../../public/DarraghImage.png'
import GintyImage from '../../../public/GintyImage.png'
import JhonnyFingerImage from '../../../public/JhonnyFingersImage.png'
import MorImage from '../../../public/MorImage.png'


const EventsPage = () => {
  const EventsList = [
    {
      image: GintyImage,
      name: 'Darragh',
      date: '2024-01-04',
      details: 'All patreons must be over the age of 18',
      day: 'Thursday',
      location: 'Main Stage',
      id: 1,
      key: 1,
      content: <img src={GintyImage} alt="2" />,
    },
    {
      image: GintyImage,
      name: 'Mini',
      date: '2024-01-05',
      details: 'details',
      day: 'Saturday',
      location: 'Courtyard',
      id: 2,
      key: 2,
      content: <img src={GintyImage} alt="3" />,
    },
    {
      image: MorImage,
      name: 'Ginty',
      date: '2024-01-06',
      details: 'details',
      day: 'Saturday',
      location: 'Main Stage',
      id: 3,
      key: 3,
      content: <img src={MorImage} alt="1" />,
    },
    {
      image: AfterDarkImage,
      name: 'Mor',
      date: '2024-01-06',
      details: 'details',
      day: 'Sunday',
      location: 'Main Stage',
      id: 4,
      key: 4,
      content: <img src={AfterDarkImage} alt="4" />,
    },
    {
      image: DarraghImage,
      name: 'Dooleys',
      date: '2024-01-11',
      details: 'details',
      day: 'Wednesday',
      location: 'Main Stage',
      id: 5,
      key: 5,
      content: <img src={DarraghImage} alt="5" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Ginty',
      date: '2024-01-13',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Mor',
      date: '2024-01-13',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Adam',
      date: '2024-01-17',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Dale',
      date: '2024-01-18',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Ginty',
      date: '2024-01-20',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Mor',
      date: '2024-01-20',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Dale',
      date: '2024-01-25',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Ginty',
      date: '2024-01-27',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Mor',
      date: '2024-01-27',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Dooleys',
      date: '2024-02-01',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Dooleys',
      date: '2024-02-15',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
      content: <img src={JhonnyFingerImage} alt="6" />,
    },
    {
      image: JhonnyFingerImage,
      name: 'Dooleys',
      date: '2024-02-22',
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
                Our Socials, Check Out Our Acts Below, Click on the sides`
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
