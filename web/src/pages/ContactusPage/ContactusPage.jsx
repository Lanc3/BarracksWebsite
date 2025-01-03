import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AnimatedTitle from 'src/components/AnimatedTitle/AnimatedTitle'
import PageTop from 'src/components/PageTop/PageTop'
import ContactForm from 'src/components/ContactForm/ContactForm'
const ContactusPage = () => {
  return (
    <div className=" h-screen">
      <PageTop
        title={'Contact Us'}
        content={
          'If you have any questions or enquiries, please feel free to reach out to us.'
        }
      >
        <div className="-mr-3 mb-16 mt-16  origin-bottom  p-8 pl-2 ">
          <div className="origin-bottom ">
            <div className="align-center mt-4 items-center justify-center text-xl">
              <p className="text-white">
                Email:{' '}
                <a className="text-white" href="mailto:info@thebarracks.ie">
                  info@thebarracks.ie
                </a>
              </p>
              <p className="text-white">
                Phone: <span className="text-white">059 - 914 - 1781</span>
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                to={routes.home()}
                className="text-white hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </PageTop>
      {/* <ContactForm/> */}
    </div>
  )
}

export default ContactusPage
