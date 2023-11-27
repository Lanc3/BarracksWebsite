import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import Particles from 'src/components/Particles/Particles'
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#111827]">
      <div className="relative z-50">
        <Header />
      </div>

      <main className="">{children}</main>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
