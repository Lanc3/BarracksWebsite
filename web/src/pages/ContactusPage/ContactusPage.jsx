import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import PageTop from 'src/components/PageTop/PageTop'
const ContactusPage = () => {
  return (
    <div className="-mt-20 h-screen">
      <PageTop
        title={'Contact Us'}
        content={
          'If you have any questions or inquiries, please feel free to reach out to us.'
        }
      >
        <div className="-mr-3 mb-16 mt-16  origin-bottom  p-8 pl-2 ">
          <div className="origin-bottom ">
            <div className="align-center mt-4 items-center justify-center text-xl">
              <p className="text-white">
                Email:{' '}
                <a className="text-[#35B8DF]" href="mailto:info@thebarracks.ie">
                  info@thebarracks.ie
                </a>
              </p>
              <p className="text-white">
                Phone: <span className="text-[#35B8DF]">0599141781</span>
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                to={routes.home()}
                className="text-[#35B8DF] hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </PageTop>
      {/* <div className="-mr-3 mb-16 mt-16  origin-bottom -rotate-2 bg-[#693d97] p-8 pl-2 shadow-md drop-shadow-[0_15px_15px_rgba(211,44,255,0.3)]">
        <div className="origin-bottom rotate-2">
          <AnimatedTitle title="" />
          <p className="mb-4 text-lg">
            If you have any questions or inquiries, please feel free to reach
            out to us.
          </p>
          <div className="align-center mt-4 items-center justify-center text-xl">
            <p>
              Email:{' '}
              <a className="text-[#35B8DF]" href="mailto:info@thebarracks.ie">
                info@thebarracks.ie
              </a>
            </p>
            <p>
              Phone: <span className="text-[#35B8DF]">0599141781</span>
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link to={routes.home()} className="text-[#35B8DF] hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ContactusPage
