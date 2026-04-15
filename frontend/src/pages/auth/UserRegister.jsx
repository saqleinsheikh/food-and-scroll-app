import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleSubmit = async (e) => {
     e.preventDefault();
     
     try{
      const res =  await axios.post("http://localhost:3000/api/auth/user/register",
        {
          fullName:name,
          email:email,
          password:password,
        },{
          withCredentials:true,
        }
      )
      console.log(res.data);
      navigate("/")
     }catch(err){
        console.log(err.response?.data || err.message);
     }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="w-full max-w-md p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg space-y-5  ">
        <h1 className="text-2xl font-semibold text-center">User Register</h1>
        <form onSubmit={handleSubmit} 
        className='space-y-4'
        >
          <input
          value={name}
          onChange={(e)=>{setName(e.target.value)}} 
          className="w-full px-4 py-2  rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
           placeholder="Full Name" />
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} 
          className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
           placeholder="Email" 
           type="email" />
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
           placeholder="Password"
            type="password" />
          <button className="w-full py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition">Register</button>
        </form>
        <p className="text-sm text-center">Already have an account? Login</p>
      </div>
    </div>
  )
}

export default UserRegister