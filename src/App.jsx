import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import About from './pages/About'
import GetInTuch from './pages/GetInTuch'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Footer from './components/Footer'
import Admin from './pages/Admin'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <div className='pt-15 text-main-purple'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/getInTuch' element={<GetInTuch />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/*' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
