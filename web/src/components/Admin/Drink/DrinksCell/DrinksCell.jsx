import { Link, routes } from '@redwoodjs/router'

import Drinks from 'src/components/Admin/Drink/Drinks'

export const QUERY = gql`
  query FindDrinks {
    drinks {
      id
      name
      slug
      description
      category
      priceCents
      abv
      ingredients
      isFeatured
      isActive
      sortOrder
      iconKey
      imageUrl
      tags
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
  </div>
)

export const Empty = () => {
  return (
    <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
      <p className="text-gray-400 mb-4">No drinks yet.</p>
      <Link
        to={routes.adminNewDrink()}
        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
      >
        + Add Your First Drink
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
    Error: {error?.message}
  </div>
)

export const Success = ({ drinks }) => {
  return <Drinks drinks={drinks} />
}
