import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [data, setData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  const handleData = (e) =>{
    
    const{name,value}=e.target

    setData({...data,[name]:value})
   

  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/login`, data)
      console.log(response.data);
      localStorage.setItem('token', response.data.token)
      localStorage.setItem("email", response.data.user.email); 
      setData({password:'', email: '' })
      navigate('/')
      


    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }



  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="shadow-lg sm:w-full   md:w-[30%] border border-gray-300 flex flex-col text-center items-center p-6 rounded-3xl">
        <h1 className="text-2xl font-bold">Login</h1>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>

          <div className="flex flex-col justify-center items-center gap-4 mt-5 w-full">
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
                value={data.password}
                onChange={(e) => handleData(e)}
              />
            </div>

            <div className='flex gap-10 text-gray-700 font-extrabold'>
              <p>Don't have an account?</p>
             <NavLink to={'/signup'}><p>Signup</p></NavLink> 
            </div>

            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-5 hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
