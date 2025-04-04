import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [data, setData] = useState({ name: '', password: '', email: '' })
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


  const handleData = (e) => {

    const { name, value } = e.target;

    setData({ ...data, [name]: value })


  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, data)
      console.log(response.data);
      setData({ name: '', password: '', email: '' })
      


    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="shadow-lg sm:w-full   md:w-[30%] border border-gray-300 flex flex-col text-center items-center p-6 rounded-3xl">
        <h1 className="text-2xl font-bold">Signup</h1>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>

          <div className="flex flex-col justify-center items-center gap-4 mt-5 w-full">
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 text-left">Name:</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                name='name'
                value={data.name}
                onChange={(e) => handleData(e)}
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 text-left">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                name='email'
                value={data.email}
                onChange={(e) => handleData(e)}
              />
            </div>

            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 text-left">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
                name='password'
                onChange={(e) => handleData(e)}
                value={data.password}
              />
            </div>

            <div className='flex gap-10 text-gray-700 font-extrabold'>
              <p>Already have an account?</p>
              <NavLink to={'/login'}><p>Login</p></NavLink>
            </div>

            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-5 hover:bg-blue-700 transition duration-300">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default Signup
