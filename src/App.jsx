import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Product'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
