import cian from '../../../public/cian.webp'
import cody from '../../../public/cody.webp'
import dan from '../../../public/dan.webp'
import danny from '../../../public/danny.webp'
import eliza from '../../../public/eliza.webp'
import filip from '../../../public/filip.webp'
import joanne from '../../../public/joanne.webp'
import keelan from '../../../public/keelan.webp'
import kotrina from '../../../public/kotrina.webp'
import nicola from '../../../public/nicola.webp'
import pavel from '../../../public/pavel.jpg'
import rebecca from '../../../public/rebecca.webp'
import sapphire from '../../../public/sapphire.webp'
import lisa from '../../../public/lisa.webp'
import tristan from '../../../public/tristan.webp'
import jack from '../../../public/Jack.webp'
import aaron from '../../../public/aaron.jpg'

const TeamSection = () => {
  const teamMembers = [
    { name: 'Joanne', role: 'Duty Manager', image: joanne },
    { name: 'Aaron', role: 'Assistant Manager', image: aaron },
    { name: 'Jack', role: 'Social Media Manager', image: jack },
    { name: 'Nicola', role: 'Media/Events Manager', image: nicola },
    { name: 'Filip', role: 'Floor Head', image: filip },
  ]

  return (
    <section className="bg-gray-800 rounded-2xl p-6 lg:p-8" data-aos="fade-up">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-2">Meet Our Team</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Our talented team of professional and courteous staff members are here to make your experience unforgettable.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="group text-center"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {/* Image Container */}
            <div className="relative mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32">
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              {member.name}
            </h3>

            {/* Role Badge */}
            <p className="text-sm font-medium bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Element */}
      <div className="hidden md:block absolute bottom-0 right-0 -mb-20 -mr-20 blur-2xl opacity-30 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="team-gradient" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#team-gradient)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
    </section>
  )
}

export default TeamSection
