import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Drink/DrinksCell'

const DELETE_DRINK_MUTATION = gql`
  mutation DeleteDrinkMutation($id: Int!) {
    deleteDrink(id: $id) {
      id
    }
  }
`

const formatPrice = (cents) => {
  return `€${(cents / 100).toFixed(2)}`
}

const DrinksList = ({ drinks }) => {
  const [deleteDrink] = useMutation(DELETE_DRINK_MUTATION, {
    onCompleted: () => {
      toast.success('Drink deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id, name) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteDrink({ variables: { id } })
    }
  }

  // Group drinks by category
  const groupedDrinks = drinks.reduce((acc, drink) => {
    if (!acc[drink.category]) {
      acc[drink.category] = []
    }
    acc[drink.category].push(drink)
    return acc
  }, {})

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Total Drinks</p>
          <p className="text-2xl font-bold text-white">{drinks.length}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Active</p>
          <p className="text-2xl font-bold text-green-400">
            {drinks.filter((d) => d.isActive).length}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Featured</p>
          <p className="text-2xl font-bold text-purple-400">
            {drinks.filter((d) => d.isFeatured).length}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Categories</p>
          <p className="text-2xl font-bold text-blue-400">
            {Object.keys(groupedDrinks).length}
          </p>
        </div>
      </div>

      {/* Drinks Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Drink
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {drinks.map((drink) => (
              <tr key={drink.id} className="hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {drink.name}
                        {drink.isFeatured && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 truncate max-w-xs">
                        {drink.ingredients.slice(0, 3).join(', ')}
                        {drink.ingredients.length > 3 && '...'}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                    {drink.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {formatPrice(drink.priceCents)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      drink.isActive
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {drink.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <Link
                    to={routes.adminDrink({ id: drink.id })}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View
                  </Link>
                  <Link
                    to={routes.adminEditDrink({ id: drink.id })}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDeleteClick(drink.id, drink.name)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DrinksList
