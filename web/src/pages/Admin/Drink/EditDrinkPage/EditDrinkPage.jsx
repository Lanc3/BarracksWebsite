import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditDrinkCell from 'src/components/Admin/Drink/EditDrinkCell'

const EditDrinkPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit Drink" description="Edit drink details" />

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            to={routes.adminDrinks()}
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-white">Edit Drink</h1>
        </div>

        <EditDrinkCell id={id} />
      </div>
    </>
  )
}

export default EditDrinkPage
