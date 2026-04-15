import React from 'react'

const FoodPartnerLogin = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="w-full max-w-md p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg space-y-5">
      <h1 className="text-2xl font-semibold text-center">Food Partner Login</h1>
      <input className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" />
      <input className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password" type="password" />
      <button className="w-full py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition">Login</button>
      <p className="text-sm text-center">New here? Register</p>
    </div>
  </div>
  )
}

export default FoodPartnerLogin