import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import MapDirections from 'src/components/MapDirections/MapDirections'
import PageTop from 'src/components/PageTop/PageTop'
import TeamSection from 'src/components/TeamSection/TeamSection'
const AboutusPage = () => {
  return (
    <div className="mt-0">
      <PageTop title={'About Us'} content={''} >
        <div className="text-wrap sm:px-20 text-ellipsis px-20 md:px-0 lg:px-0">
      <p className="text-white mb-6 origin-bottom text-ellipsis">
              Welcome to The Barracks, We are
              dedicated to providing you with the best Dancing and drinking
              experience in town.
            </p>
            <p className="text-white mb-6 origin-bottom text-ellipsis">
              Our team of talented bartenders work tirelessly to
              deliver delicious drinks that will leave you craving for
              more. From classic pub fare to handcrafted cocktails, we have
              something for everyone.
            </p>
            <p className="text-white mb-6 origin-bottom text-wrap">
              The Barracks has been a community gathering place for over a
              century. We take pride in our rich history and are committed to
              creating new memories with each and every guest.
            </p>
            <p className="text-white mb-6 origin-bottom text-wrap">
              Join us today, and let us be a part of your story. We look forward
              to serving you!
            </p>
            </div>
      </PageTop>
      <div>
        <div className="container mx-auto p-8 lg:p-12">
        <div className="rounded-2xl bg-gray-800 p-8 text-white shadow-lg">
          <h2 className="mb-4 text-center text-4xl font-bold">
            HOUSE RULES
          </h2>
          <p className="mb-4 text-center text-lg">
            The Barracks is a community space and Late Bar located in Tullow Street, Carlow.
          </p>
          <p className="mb-8 text-center text-lg">
            Our venue features one indoor dancefloor, as well as an outdoor space complete with its own DJ booth and outdoor bar. On Thursdays, Saturday and Sundays, we showcase live performances, while Friday and Saturday are dedicated to our renowned DJ’s. In addition, we offer all Sports fixtures.
          </p>
          <div className="mb-8 rounded-xl bg-gray-700 p-6">
            <p className="font-semibold text-white">
              As a social space created and run by artists, DJs, and partygoers, The Barracks is dedicated to providing a platform for a diverse array of arts and music. We prioritize the creation of a safe and inclusive environment. Any form of violent, homophobic, sexist behavior or harassment or discrimination will not be tolerated and will result in the end of your night at The Barracks.
            </p>
          </div>

          <h3 className="mb-4 text-2xl font-semibold">
            ✦ House Rules
          </h3>
          <p className="mb-6">
            In order to create a safe and inclusive environment for all of our guests, staff, partners, tenants, and artists, we have established some house rules that everyone must follow. These rules are in place to protect the well-being of everyone who visits our institution, which includes our bar, and outside spaces. Please be mindful of how your actions and behavior can affect others' experiences in our space.
          </p>
          <p className="mb-6">
            We do not tolerate any form of aggression, assault, discrimination, exclusion, harassment, or violence, including (but not limited to) ableism, antisemitism, body shaming, bullying, intimidation, Islamophobia, racism, queerphobia, sexism, sexual misconduct, or transphobia. Guests who are visibly drunk, on drugs, or disruptive and uncooperative will not be allowed to enter.
          </p>
          <p className="mb-6">
            If you experience discomfort or any harassment or become a witness of such behavior, please immediately report it to any of our staff members. Left Bank has experienced, well-trained team members who protect the guests' safety and care for their comfort.
          </p>

          <ul className="mb-8 list-inside space-y-2 list-disc">
            <li>To enter the Barracks, you must be at least 18 years old and be able to present a valid ID in physical form upon request.</li>
            <li>If you do not agree to a search upon entering the premises, you will not be allowed to enter.</li>
            <li>If you feel uncomfortable being searched by a specific team member, we will do our best to accommodate your needs.</li>
            <li>We do not allow liquids or food to be brought into the venue. Please let the door hosts know if you have any medical needs that require you to bring a liquid into the club.</li>
            <li>The open use, possession, or trade of illegal substances is strictly prohibited on the premises. Additionally, possession or trade of weapons is not allowed.</li>
            <li>For your protection and ours, we use camera surveillance.</li>
            <li>Please be aware that the lighting at the Barracks may be harmful to those with seizure sensitivities, epilepsy, or who have had a stroke. The Barracks cannot be held responsible for any injuries resulting from this.</li>
            <li>If you are feeling sick or have symptoms of Covid-19, please stay home and get tested.</li>
            <li>The Barracks is not responsible for lost items.</li>
          </ul>

          <h4 className="mb-2 text-xl font-semibold">
            We apply a strict dress code:
          </h4>
          <ul className="mb-6 list-inside space-y-1 list-disc">
            <li>Smart casual</li>
            <li>No white socks</li>
            <li>No tracksuits</li>
            <li>No sports co-ords</li>
            <li>No visible injury or blood</li>
          </ul>

          <p className="mt-4 text-center">
            Feedback: <a href="mailto:info@thebarracks.ie" className="text-blue-400 hover:underline">info@thebarracks.ie</a>
          </p>
        </div>
      </div>
        </div>
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
