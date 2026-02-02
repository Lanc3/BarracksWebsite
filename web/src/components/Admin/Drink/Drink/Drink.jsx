import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DRINK_MUTATION = gql`
  mutation DeleteDrinkMutation($id: Int!) {
    deleteDrink(id: $id) {
      id
    }
  }
`

const formatPrice = (cents) => `€${(cents / 100).toFixed(2)}`

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleDateString('en-IE', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </time>
    )
  )
}

const Drink = ({ drink }) => {
  const [deleteDrink] = useMutation(DELETE_DRINK_MUTATION, {
    onCompleted: () => {
      toast.success('Drink deleted')
      navigate(routes.adminDrinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id, name) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteDrink({ variables: { id } })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{drink.name}</h2>
          <p className="text-gray-400">/{drink.slug}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to={routes.adminEditDrink({ id: drink.id })}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
          >
            Edit
          </Link>
          <button
            type="button"
            onClick={() => onDeleteClick(drink.id, drink.name)}
            className="px-4 py-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-700">
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">Category</dt>
            <dd className="mt-1 text-white">{drink.category}</dd>
          </div>
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">Price</dt>
            <dd className="mt-1 text-white">{formatPrice(drink.priceCents)}</dd>
          </div>
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">ABV</dt>
            <dd className="mt-1 text-white">{drink.abv ? `${drink.abv}%` : 'N/A'}</dd>
          </div>
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">Status</dt>
            <dd className="mt-1 flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  drink.isActive
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {drink.isActive ? 'Active' : 'Inactive'}
              </span>
              {drink.isFeatured && (
                <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                  Featured
                </span>
              )}
            </dd>
          </div>
          <div className="bg-gray-800 p-4 md:col-span-2">
            <dt className="text-sm text-gray-400">Description</dt>
            <dd className="mt-1 text-white">{drink.description || 'No description'}</dd>
          </div>
          <div className="bg-gray-800 p-4 md:col-span-2">
            <dt className="text-sm text-gray-400">Ingredients</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {drink.ingredients.map((ingredient, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded"
                >
                  {ingredient}
                </span>
              ))}
            </dd>
          </div>
          <div className="bg-gray-800 p-4 md:col-span-2">
            <dt className="text-sm text-gray-400">Tags</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {drink.tags.length > 0 ? (
                drink.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">No tags</span>
              )}
            </dd>
          </div>
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">Created</dt>
            <dd className="mt-1 text-white">{timeTag(drink.createdAt)}</dd>
          </div>
          <div className="bg-gray-800 p-4">
            <dt className="text-sm text-gray-400">Updated</dt>
            <dd className="mt-1 text-white">{timeTag(drink.updatedAt)}</dd>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div>
        <Link
          to={routes.adminDrinks()}
          className="text-purple-400 hover:text-purple-300"
        >
          ← Back to all drinks
        </Link>
      </div>
    </div>
  )
}

export default Drink
