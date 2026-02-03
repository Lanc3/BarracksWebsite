import { MetaTags } from '@redwoodjs/web'

import PageTop from 'src/components/PageTop/PageTop'
import TeamSection from 'src/components/TeamSection/TeamSection'

const AboutusPage = () => {
  const venueFeatures = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: 'Indoor Dancefloor',
      description:
        'Our main indoor space features a vibrant dancefloor with state-of-the-art sound and lighting systems.',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: 'Outdoor Space',
      description:
        'Enjoy our outdoor area complete with its own DJ booth and bar - perfect for summer nights.',
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: 'Live Entertainment',
      description:
        'Live performances on Thursdays, Saturdays & Sundays. Renowned DJs on Friday & Saturday nights.',
    },
  ]

  const entryRules = [
    { text: 'Must be 18+ with valid physical ID', icon: 'id' },
    { text: 'Agree to security search upon entry', icon: 'search' },
    {
      text: 'No outside food or liquids (medical exceptions apply)',
      icon: 'food',
    },
    { text: 'No illegal substances or weapons', icon: 'prohibited' },
    { text: 'Camera surveillance in operation', icon: 'camera' },
    { text: 'Strobe lighting in use - seizure warning', icon: 'warning' },
  ]

  const dressCode = [
    { text: 'Smart casual', allowed: true },
    { text: 'No white socks', allowed: false },
    { text: 'No tracksuits', allowed: false },
    { text: 'No sports co-ords', allowed: false },
  ]

  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about The Barracks - Carlow's premier late bar and entertainment venue. Discover our story, venue features, house rules, and meet our team."
      />

      <div className="h-18" />
      {/* Main Content */}
      <div className="container mx-auto -mt-8 px-4 pb-16">
        {/* Welcome Section */}
        <div
          className="mb-8 rounded-2xl bg-gray-800 p-6 lg:p-8"
          data-aos="fade-up"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">
            Welcome to The Barracks
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-300">
                The Barracks is a community space and late bar located in the
                heart of Tullow Street, Carlow. We're dedicated to providing you
                with the best dancing and drinking experience in town.
              </p>
              <p className="text-slate-300">
                Our team of talented bartenders work tirelessly to deliver
                delicious drinks that will leave you craving for more. From
                classic pub fare to handcrafted cocktails, we have something for
                everyone.
              </p>
            </div>
            <div>
              <p className="mb-4 text-slate-300">
                The Barracks has been a community gathering place for over a
                century. We take pride in our rich history and are committed to
                creating new memories with each and every guest.
              </p>
              <p className="text-slate-300">
                Created and run by artists, DJs, and partygoers, we're dedicated
                to providing a platform for diverse arts and music while
                maintaining a safe and inclusive environment.
              </p>
            </div>
          </div>
        </div>

        {/* Venue Features */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {venueFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="hover:bg-gray-750 rounded-2xl bg-gray-800 p-6 text-center transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* House Rules Section */}
        <div
          className="mb-8 rounded-2xl bg-gray-800 p-6 lg:p-8"
          data-aos="fade-up"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            House Rules
          </h2>

          {/* Inclusivity Statement */}
          <div className="mb-8 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/50 to-purple-800/30 p-6">
            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-purple-300">
                  Safe & Inclusive Space
                </h3>
                <p className="text-slate-300">
                  We prioritize creating a safe and inclusive environment. Any
                  form of violent, homophobic, sexist behavior, harassment, or
                  discrimination will not be tolerated and will result in the
                  end of your night at The Barracks. If you experience or
                  witness any such behavior, please report it to our trained
                  staff immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Entry Requirements & Dress Code Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Entry Requirements */}
            <div>
              <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
                <svg
                  className="mr-2 h-5 w-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Entry Requirements
              </h3>
              <div className="space-y-3">
                {entryRules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded-lg bg-gray-700/50 p-3"
                  >
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-600">
                      <span className="text-sm font-semibold text-purple-400">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-slate-300">{rule.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dress Code */}
            <div>
              <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
                <svg
                  className="mr-2 h-5 w-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                Dress Code
              </h3>
              <div className="rounded-xl bg-gray-700/50 p-4">
                <p className="mb-4 text-sm text-slate-400">
                  We apply a strict dress code policy:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {dressCode.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center rounded-lg p-3 ${
                        item.allowed
                          ? 'border border-green-500/20 bg-green-900/20'
                          : 'border border-red-500/20 bg-red-900/20'
                      }`}
                    >
                      {item.allowed ? (
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={
                          item.allowed ? 'text-green-300' : 'text-red-300'
                        }
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mt-6 rounded-xl bg-gray-700/30 p-4">
                <h4 className="mb-2 text-sm font-semibold text-slate-300">
                  Please Note:
                </h4>
                <ul className="space-y-1 text-sm text-slate-400">
                  <li>• The Barracks is not responsible for lost items</li>
                  <li>• If feeling unwell, please stay home</li>
                  <li>• Medical exceptions for liquids - inform door staff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="mt-8 text-center">
            <p className="text-slate-400">
              Questions or feedback?{' '}
              <a
                href="mailto:info@thebarracks.ie"
                className="font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                info@thebarracks.ie
              </a>
            </p>
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />
      </div>
    </>
  )
}

export default AboutusPage
