import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
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
import notfopund from '../../../public/logo.png'

const TeamSection = () => {
  return (
    <section className=" mt-24 origin-bottom  ">

      <div className="origin-bottom  px-4 py-8  text-center lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <AnimatedTitle title={'Our Team'} />
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Check out our talented team of professional and courteous staff
            members
          </p>
        </div>

        <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 translate-y-2/3 blur-2xl opacity-70 pointer-events-none" aria-hidden="true" >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
              </svg>
            </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={joanne}
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Joanne Feeney</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">General Manager</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full"
              src={aaron}
              alt="Aaron"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Aaron Keating</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Duity Manager</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={jack}
              alt="Jese Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Jack Dempsey</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Social Media Manager</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={nicola}
              alt="Joseph Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Nicola Byrne</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bar Supervisor</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={tristan}
              alt="Sofia Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Tristan McGrath</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bar Supervisor</p>

          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={sapphire}
              alt="Michael Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Sapphire Lawlor</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bartender</p>

          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={cian}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Cian O Brien</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bartender</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={danny}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Daniel Carroll</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bartender</p>

          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={eliza}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Eliza Zimmermann</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Floor Staff</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={filip}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Filip Rusiechi</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Floor Head</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={kotrina}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Kotrina cloladis</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Floor/Bar Staff</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={lisa}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Lisa Lavaud</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Floor Staff</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover"
              src={cody}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Cody Ryan</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bar Back</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full"
              src={pavel}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Pavel Dobias</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bar Back</p>

          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 h-36 w-36 rounded-full"
              src={notfopund}
              alt="Neil Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 text-white">
              <p>Aaron Quinn</p>
            </h3>
            <p className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Bar Back</p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default TeamSection
