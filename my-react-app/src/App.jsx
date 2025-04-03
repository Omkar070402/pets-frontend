import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Browse_Pets from './Pages/Browse_Pets'
import My_Adoptions from './Pages/My_Adoptions'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SinglePet from './Components/SinglePet'
import AdoptionForm from './Components/AdoptionForm'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/browsePets' element={<Browse_Pets />}></Route>
        <Route path='/myAdoption' element={<My_Adoptions />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path="/adopt/:id" element={<AdoptionForm />} />
        <Route path='/pet/:id' element={<SinglePet />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
