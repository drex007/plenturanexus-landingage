import { useContext, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
function App() {

  return (
    //Added comments

    <BrowserRouter>

      <Routes>

        <Route index element={

          <LandingPage />


        } />



        {/* <Route path='/contact' element={

          <ContactPage />

        } /> */}
        <Route path='/products' element={

          <ProductPage />

        } />
        

      </Routes>
    </BrowserRouter>

  )



}

export default App


