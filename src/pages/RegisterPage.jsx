import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    setPassword('')
    setUsername('')
  }
    return (
        <div className="flex justify-center items-center mt-[200px]">
          <form className="w-full max-w-xs  bg-white bg-opacity-35  p-6 rounded shadow-md" onSubmit={e => e.preventDefault()}>
          <h1 className='text-2xl text-black text-center pb-5'>Registration</h1>
            <input 
              type="text" 
              name="username" 
              value={username} 
              placeholder="Username"
              onChange={e => setUsername(e.target.value)} 
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Password" 
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center gap-4 items-center">
            <button 
              type="submit" 
              onClick={handleSubmit}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Register
            </button>
            <Link to='/login' className='bg-gray-300'>Already have an account?</Link>
            </div>
          </form>
        </div>
      );
}

export default RegisterPage;
