import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NewDrink from 'src/components/Admin/Drink/NewDrink'

const NewDrinkPage = () => {
  return (
    <>
      <MetaTags title="New Drink" description="Create a new drink" />

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            to={routes.adminDrinks()}
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-white">Add New Drink</h1>
        </div>

        <NewDrink />
      </div>
    </>
  )
}

export default NewDrinkPage
