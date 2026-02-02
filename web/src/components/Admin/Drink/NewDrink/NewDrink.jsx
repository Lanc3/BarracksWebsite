import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DrinkForm from 'src/components/Admin/Drink/DrinkForm'

const CREATE_DRINK_MUTATION = gql`
  mutation CreateDrinkMutation($input: CreateDrinkInput!) {
    createDrink(input: $input) {
      id
    }
  }
`

const NewDrink = () => {
  const [createDrink, { loading, error }] = useMutation(CREATE_DRINK_MUTATION, {
    onCompleted: () => {
      toast.success('Drink created')
      navigate(routes.adminDrinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDrink({ variables: { input } })
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-white">New Drink</h2>
      </header>
      <DrinkForm onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewDrink
