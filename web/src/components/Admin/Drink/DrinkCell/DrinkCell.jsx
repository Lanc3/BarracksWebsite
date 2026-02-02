import Drink from 'src/components/Admin/Drink/Drink'

export const QUERY = gql`
  query FindDrinkById($id: Int!) {
    drink: drink(id: $id) {
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

export const Empty = () => (
  <div className="text-center py-12 text-gray-400">Drink not found</div>
)

export const Failure = ({ error }) => (
  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
    Error: {error?.message}
  </div>
)

export const Success = ({ drink }) => {
  return <Drink drink={drink} />
}
