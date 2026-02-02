import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DrinksCell from 'src/components/Admin/Drink/DrinksCell'

const DrinksPage = () => {
  return (
    <>
      <MetaTags title="Manage Drinks" description="Admin drinks management" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Drinks Menu</h1>
          <Link
            to={routes.adminNewDrink()}
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
          >
            <span className="mr-2">+</span> New Drink
          </Link>
        </div>

        <DrinksCell />
      </div>
    </>
  )
}

export default DrinksPage
