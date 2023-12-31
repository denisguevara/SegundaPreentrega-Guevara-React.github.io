import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'

//ejecutar npm install react-router-dom
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
