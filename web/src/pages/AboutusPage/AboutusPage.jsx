import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import MapDirections from 'src/components/MapDirections/MapDirections'
import PageTop from 'src/components/PageTop/PageTop'
import TeamSection from 'src/components/TeamSection/TeamSection'
const AboutusPage = () => {
  return (
    <div className="-mt-20">
      <PageTop title={'About Us'} content={''} >
      <p className="text-white mb-6 origin-bottom ">
              Welcome to The Barracks, your friendly neighborhood pub. We are
              dedicated to providing you with the best dining and drinking
              experience in town.
            </p>
            <p className="text-white mb-6 origin-bottom ">
              Our team of talented chefs and bartenders work tirelessly to
              deliver delicious food and drinks that will leave you craving for
              more. From classic pub fare to handcrafted cocktails, we have
              something for everyone.
            </p>
            <p className="text-white mb-6 origin-bottom ">
              The Barracks has been a community gathering place for over a
              century. We take pride in our rich history and are committed to
              creating new memories with each and every guest.
            </p>
            <p className="text-white mb-6 origin-bottom ">
              Join us today, and let us be a part of your story. We look forward
              to serving you!
            </p>
      </PageTop>
      <TeamSection />
      <div className=" -mx-4">
        <div className=" -z-30 mx-auto py-12">
          <div className="mt-12 flex w-full flex-col content-center items-center justify-center p-2 align-middle">

          </div>
          <MapDirections />
        </div>
      </div>
    </div>
  )
}

export default AboutusPage
