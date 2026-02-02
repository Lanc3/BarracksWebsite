import { MetaTags } from '@redwoodjs/web'

import DrinksMenuCell from 'src/components/DrinksMenuCell/DrinksMenuCell'
import PageTop from 'src/components/PageTop/PageTop'
import Particles from 'src/components/Particles/Particles'

const MenuPage = () => {
  return (
    <>
      <MetaTags
        title="Cocktails Menu"
        description="Explore our handcrafted cocktails at The Barracks. Fresh ingredients, expert mixology, and unforgettable flavors."
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative md:-mt-20 sm:mt-20">
          <PageTop
            title="Our Cocktails Menu"
            content="Check out our Cocktail menu. Keep an eye out — we add new cocktails every week!"
          />
          <Particles className="absolute inset-0 z-10 w-screen pointer-events-none" />
        </div>

        {/* Menu Section */}
        <section className="relative z-20 max-w-7xl mx-auto py-12">
          <DrinksMenuCell />
        </section>
      </div>
    </>
  )
}

export default MenuPage
