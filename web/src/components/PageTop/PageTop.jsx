import Illustration from '../../../public/glow-bottom.svg'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import Particles from '../Particles/Particles'
const PageTop = ({ title, content }) => {
  return (
    <div className="relative mx-32 -mt-12 h-[300px] rounded-b-[3rem] px-16 ">
      <Particles className="absolute inset-0 z-10 w-screen rounded-b-[3rem]" />
      <div
        className=" absolute inset-0 z-20 -mx-28 overflow-hidden rounded-b-[3rem]"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/3 rounded-b-[3rem]">
          <img
            src={Illustration}
            className="max-w-none"
            alt="Hero Illustration"
          />
        </div>
        <div className="z-30 pb-16 pt-20 md:pb-16 md:pt-16">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="h1 bg-gradient-to-r from-[#498294] via-[#35B8DF] to-[#498294] bg-clip-text pb-4 text-transparent"
              data-aos="fade-down"
            >
              {title}
            </h1>
            <AnimatedTitle title="" />
            <p
              className="mb-8 text-lg text-slate-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTop
