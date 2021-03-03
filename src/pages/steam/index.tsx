import { NextPage } from 'next'
import Main from '~/components/Main'
import * as C from '~/components'

const steam: NextPage = () => {
  return (
    <>
      <C.MetaTags title="Steam" />
      <Main />
    </>
  )
}

export default steam
