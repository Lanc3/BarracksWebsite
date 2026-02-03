import { MetaTags } from '@redwoodjs/web'

import ContactForm from 'src/components/ContactForm/ContactForm'
import PageTop from 'src/components/PageTop/PageTop'

const ContactusPage = () => {
  const openingTimes = [
    { day: 'Monday', time: 'CLOSED', isClosed: true },
    { day: 'Tuesday', time: 'CLOSED', isClosed: true },
    { day: 'Wednesday', time: '5 p.m – 11:30 p.m.', isClosed: false },
    { day: 'Thursday', time: '5 p.m – 1:30 a.m.', isClosed: false },
    { day: 'Friday', time: '5 p.m – 2 a.m.', isClosed: false },
    { day: 'Saturday', time: '3 p.m – 2 a.m.', isClosed: false },
    { day: 'Sunday', time: '1 p.m – 2 a.m.', isClosed: false },
  ]

  // Get current day to highlight
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <MetaTags
        title="Contact Us"
        description="Get in touch with The Barracks. Book your event, make enquiries, or find our location and opening hours."
      />

      <div className="h-18" />

      {/* Main Content */}
      <div className="container mx-auto -mt-8 px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info & Opening Hours */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="rounded-2xl bg-gray-800 p-6" data-aos="fade-up">
              <h2 className="mb-6 text-xl font-bold text-white">
                Contact Information
              </h2>

              {/* Email Card */}
              <a
                href="mailto:info@thebarracks.ie"
                className="group mb-4 flex items-center rounded-xl bg-gray-700/50 p-4 transition-colors hover:bg-gray-700"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 transition-transform group-hover:scale-110">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-white transition-colors group-hover:text-purple-400">
                    info@thebarracks.ie
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+353599141781"
                className="group mb-4 flex items-center rounded-xl bg-gray-700/50 p-4 transition-colors hover:bg-gray-700"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 transition-transform group-hover:scale-110">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium text-white transition-colors group-hover:text-purple-400">
                    059 914 1781
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <a
                href="https://maps.google.com/?q=The+Barracks+Tullow+Street+Carlow"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-xl bg-gray-700/50 p-4 transition-colors hover:bg-gray-700"
              >
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 transition-transform group-hover:scale-110">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="font-medium text-white transition-colors group-hover:text-purple-400">
                    Tullow Street, Carlow
                  </p>
                </div>
              </a>
            </div>

            {/* Opening Hours */}
            <div
              className="rounded-2xl bg-gray-800 p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="mb-6 text-xl font-bold text-white">
                Opening Hours
              </h2>
              <div className="space-y-3">
                {openingTimes.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                      item.day === today
                        ? 'border border-purple-500/30 bg-purple-900/30'
                        : ''
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        item.day === today
                          ? 'text-purple-300'
                          : 'bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent'
                      }`}
                    >
                      {item.day}
                      {item.day === today && (
                        <span className="ml-2 rounded-full bg-purple-500 px-2 py-0.5 text-xs text-white">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={
                        item.isClosed ? 'text-gray-500' : 'text-slate-300'
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div
              className="rounded-2xl bg-gray-800 p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="mb-6 text-xl font-bold text-white">Follow Us</h2>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/thebarracks.carlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-blue-600"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6 text-gray-400 transition-colors group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/the_barracks_carlow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 transition-all hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6 text-gray-400 transition-colors group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="https://twitter.com/Barracks_Carlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-black"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div
            className="rounded-2xl bg-gray-800 p-6 lg:p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="mb-2 text-xl font-bold text-white">
              Book Your Event
            </h2>
            <p className="mb-6 text-gray-400">
              Planning a party or event? Fill out the form below and we'll get
              back to you.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactusPage
