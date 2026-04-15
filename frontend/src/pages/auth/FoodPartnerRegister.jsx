import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {

const [restaurantName, setRestaurantName] = useState("")
const [ownerName, setOwenerName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [contact, setContact] = useState("")
const [address, setAddress] = useState("")
const navigate = useNavigate();


const handleSubmit = async(e)=>{
e.preventDefault();

try{
const res = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
  
})
}catch(err){

}
}
  return (
 <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="w-full max-w-md p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg space-y-5">
      <h1 className="text-2xl font-semibold text-center">Food Partner Register</h1>
     <form action="" onSubmit={handleSubmit}
     className='space-y-4'>
       <input 
       value={restaurantName}
       onChange={(e)=>{setRestaurantName(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Restaurant Name" />
      <input
      value={ownerName}
      onChange={(e)=>{setOwenerName(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Owner Name" />
      <input
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Email" type="email" />
      <input
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Password" type="password" />
      <input
      value={contact}
      onChange={(e)=>{setContact(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="contact" type="number" />
      <input
      value={address}
      onChange={(e)=>{setAddress(e.target.value)}}
       className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Address" type="text" />
      <button className="w-full py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition">Register</button>
     </form>
      <p className="text-sm text-center">Already registered? Login</p>
    </div>
  </div>
  )
}

export default FoodPartnerRegister