import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Flex, Spacer } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la tienda de productos de River Plate"}/>
    </div>
  )
}

export default App