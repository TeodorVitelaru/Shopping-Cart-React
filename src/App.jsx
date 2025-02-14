import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListPage from './pages/productList'
import ProductDetailsPage from './pages/productDetails'
import CartListPage from './pages/cartList'
import { Fragment } from 'react'
import Navbar from './components/navbar'

function App() {

  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path='/products' element={<ProductListPage/>} />
      <Route path='/product-details/:id' element={<ProductDetailsPage/>} />
      <Route path='/cart' element={<CartListPage/>}/>

    </Routes>
    
    </Router>
  )
}

export default App
