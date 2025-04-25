import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handlerSubmit = () => {
    try {
      setPassword('')
      setUsername('')

    } catch(err) {
      console.log(err);
    }
  }
    return (
        <div className="flex justify-center items-center mt-[200px]">
          <form onSubmit={e => e.preventDefault()} className="w-full max-w-xs  bg-slate-700  p-6 rounded shadow-md">
          <h1 className='text-2xl text-black text-center pb-5'>Authorization</h1>
            <input 
              type="text" 
              value={username} 
              name="username" 
              onChange={e => setUsername(e.target.value)}
              placeholder="Username" 
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              onChange={e => setPassword(e.target.value)}
              value={password} 
              name="password" 
              placeholder="Password" 
              className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center gap-4 items-center">
            <button 
              type="submit" 
              onClick={handlerSubmit}
              className="p-2 bg-yellow-500 text-lg font-semibold text-white rounded hover:bg-yellow-400 transition"
            >
              Login
            </button>
            <Link to='/register' className='text-base font-semibold'>Don't have an account?</Link>
            </div>
          </form>
        </div>
    );
}

export default LoginPage;
