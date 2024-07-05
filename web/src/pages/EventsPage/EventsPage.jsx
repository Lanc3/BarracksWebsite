import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import EventCalendar from 'src/components/EventCalendar/EventCalendar'
import PageTop from 'src/components/PageTop/PageTop'
import Particles from 'src/components/Particles/Particles'



const EventsPage = () => {
  const EventsList = [
    {
      name: 'Dooleys',
      date: '2024-07-04',
      details: 'All patreons must be over the age of 18',
      day: 'Thursday',
      location: 'Main Stage',
      id: 1,
      key: 1,

    },
    {
      name: 'Mini',
      date: '2024-07-5',
      details: 'details',
      day: 'Saturday',
      location: 'Courtyard',
      id: 2,
      key: 2,

    },
    {
      name: 'Mor',
      date: '2024-07-06',
      details: 'details',
      day: 'Saturday',
      location: 'Main Stage',
      id: 3,
      key: 3,

    },
    {
      name: 'Ginty',
      date: '2024-07-06',
      details: 'details',
      day: 'Sunday',
      location: 'Main Stage',
      id: 4,
      key: 4,

    },
    {
      name: 'After Dark',
      date: '2024-07-07',
      details: 'details',
      day: 'Wednesday',
      location: 'Main Stage',
      id: 5,
      key: 5,

    },
    {
      name: 'Dooleys',
      date: '2024-07-11',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Brendan',
      date: '2024-07-12',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Dale',
      date: '2024-07-18',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Brendan',
      date: '2024-07-19',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Darragh',
      date: '2024-07-20',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Mini',
      date: '2024-07-20',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Wizard Fruit',
      date: '2024-07-21',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Dooleys',
      date: '2024-07-25',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Brendan',
      date: '2024-07-26',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mor',
      date: '2024-07-27',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,

    },
    {
      name: 'Ginty',
      date: '2024-07-27',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-07-28',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mor',
      date: '2024-06-01',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Ginty',
      date: '2024-06-01',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-06-02',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Dale',
      date: '2024-06-06',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Brendan',
      date: '2024-06-07',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mor',
      date: '2024-06-08',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Ginty',
      date: '2024-06-08',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-06-09',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Aaron G',
      date: '2024-06-13',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mini',
      date: '2024-06-14',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Jake',
      date: '2024-06-15',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Ginty',
      date: '2024-06-15',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-06-16',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Dooleys',
      date: '2024-06-20',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mini',
      date: '2024-06-21',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mor',
      date: '2024-06-22',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Brendan',
      date: '2024-06-22',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-06-23',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Dooleys',
      date: '2024-06-27',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Brendan',
      date: '2024-06-28',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Mor',
      date: '2024-06-29',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'Ginty',
      date: '2024-06-29',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
    },
    {
      name: 'After Dark',
      date: '2024-06-30',
      details: 'details',
      day: 'day',
      location: 'location',
      id: 6,
      key: 6,
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
            <AnimatedTitle title="Calendar " />
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
