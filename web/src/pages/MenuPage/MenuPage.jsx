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

        {/* Menu Section */}
        <section className="relative z-20 mx-auto max-w-7xl py-12">
          <DrinksMenuCell />
        </section>
      </div>
    </>
  )
}

export default MenuPage
