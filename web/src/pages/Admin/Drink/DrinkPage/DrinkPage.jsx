import { MetaTags } from '@redwoodjs/web'

import DrinkCell from 'src/components/Admin/Drink/DrinkCell'

const DrinkPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Drink Details" description="View drink details" />
      <DrinkCell id={id} />
    </>
  )
}

export default DrinkPage
