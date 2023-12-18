import Illustration from '../../../public/glow-bottom.svg'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import Particles from '../Particles/Particles'
const PageTop = ({ title, content, children }) => {
  return (
    <div className="sm:max-w-auto relative mx-auto  min-h-[600px] max-w-5xl rounded-b-[3rem]  px-4 sm:px-2">
      {/* <Particles className="absolute inset-0 z-0 w-screen rounded-b-[3rem] h-[600px]" /> */}
      <div
        className=" absolute inset-0 z-20 -mx-28 overflow-hidden rounded-b-[3rem]"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 rounded-b-[3rem]">
          <img
            src={Illustration}
            className="max-w-none"
            alt="Hero Illustration"
          />
        </div>
        <div className="z-30 pb-2 pt-32 sm:pt-32 md:pt-44 md:pt-20 lg:pt-20 md:pb-2 md:pt-0">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="h1 break-words bg-gradient-to-r from-[#498294] via-[#35B8DF] to-[#498294] bg-clip-text px-32 pb-4 text-transparent sm:px-32"
              data-aos="fade-down"
            >
              {title}
            </h1>
            <AnimatedTitle title="" />
            <p
              className="mx-auto mb-8 break-words px-32 text-lg text-slate-300 sm:px-24 lg:px-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {content}
            </p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTop
