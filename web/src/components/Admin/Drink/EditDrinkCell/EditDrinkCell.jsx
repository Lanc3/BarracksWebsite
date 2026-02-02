import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DrinkForm from 'src/components/Admin/Drink/DrinkForm'

export const QUERY = gql`
  query EditDrinkById($id: Int!) {
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

const UPDATE_DRINK_MUTATION = gql`
  mutation UpdateDrinkMutation($id: Int!, $input: UpdateDrinkInput!) {
    updateDrink(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
    Error: {error?.message}
  </div>
)

export const Success = ({ drink }) => {
  const [updateDrink, { loading, error }] = useMutation(UPDATE_DRINK_MUTATION, {
    onCompleted: () => {
      toast.success('Drink updated')
      navigate(routes.adminDrinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDrink({ variables: { id, input } })
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-white">Edit {drink?.name}</h2>
      </header>
      <DrinkForm drink={drink} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
