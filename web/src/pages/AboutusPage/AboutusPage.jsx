import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import MapDirections from 'src/components/MapDirections/MapDirections'
import TeamSection from 'src/components/TeamSection/TeamSection'
const AboutusPage = () => {
  return (
    <>
      <div className=" -mx-4">
        <div className=" -z-30 mx-auto py-12">
          <div className="-z-30 origin-bottom -rotate-2 rounded-lg bg-[#693d97] p-8 text-center shadow-md drop-shadow-[0_15px_15px_rgba(211,44,255,0.3)]">
            <h1 className="-z-30 mb-4 origin-bottom rotate-2 text-3xl font-semibold text-[#78BE37]">
              <AnimatedTitle title="About Us" />
            </h1>
            <p className="text-white-600 mb-6 origin-bottom rotate-2">
              Welcome to The Barracks, your friendly neighborhood pub. We are
              dedicated to providing you with the best dining and drinking
              experience in town.
            </p>
            <p className="text-white-600 mb-6 origin-bottom rotate-2">
              Our team of talented chefs and bartenders work tirelessly to
              deliver delicious food and drinks that will leave you craving for
              more. From classic pub fare to handcrafted cocktails, we have
              something for everyone.
            </p>
            <p className="text-white-600 mb-6 origin-bottom rotate-2">
              The Barracks has been a community gathering place for over a
              century. We take pride in our rich history and are committed to
              creating new memories with each and every guest.
            </p>
            <p className="text-white-600 mb-6 origin-bottom rotate-2">
              Join us today, and let us be a part of your story. We look forward
              to serving you!
            </p>
          </div>
          <TeamSection />
          <div className="mt-12 flex w-full flex-col content-center items-center justify-center p-2 align-middle">
            <p className="">Our Location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.2480994741954!2d-6.9334939182191615!3d52.83591435124152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d5d531e38b2cf%3A0x25fbd2a50555a545!2s32%20Tullow%20St%2C%20Carlow%2C%20R93%20HW30!5e0!3m2!1sen!2sie!4v1696866270398!5m2!1sen!2sie"
              width="250"
              height="250"
              title="The Barracks"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </div>
          <MapDirections />
        </div>
      </div>
    </>
  )
}

export default AboutusPage
