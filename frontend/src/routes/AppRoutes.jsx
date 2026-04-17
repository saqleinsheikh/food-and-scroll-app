import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import UserLogin from '../pages/auth/UserLogin'
import Home from '../pages/general/Home'
import CreateFood from '../pages/FoodPartner/CreateFood'


const AppRoutes = () => {
  return (
<Router>
    <Routes>
        <Route path='/user/register' element={<UserRegister/> } />
        <Route path='/user/login' element={<UserLogin/> } />
        <Route path='/food-partner/register' element={<FoodPartnerRegister/>  } />
        <Route path='/food-partner/login' element={<FoodPartnerLogin/>  } />
        <Route path='/' element={<Home/>} />
        <Route path='/createfood' element={<CreateFood/>} />

    </Routes>
</Router>
  )
}

export default AppRoutes