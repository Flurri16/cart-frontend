import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {message, isSuccess} = useSelector(state => state.auth)
  const dispacth = useDispatch()
  const navigate = useNavigate()
  const handlerSubmit = () => {
    try {
      dispacth(loginUser({email, password}))
      setPassword('')
      setEmail('')
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if(message) {
      toast(message)
    }
    if(isSuccess) {
      navigate('/store')
    }
    
  })
    return (
        <div className="flex justify-center items-center mt-[200px]">
          <form onSubmit={e => e.preventDefault()} className="w-full max-w-xs  bg-slate-700  p-6 rounded shadow-md">
          <h1 className='text-2xl text-white text-center pb-5'>Authorization</h1>
            <input 
              type="text" 
              value={email} 
              name="username" 
              onChange={e => setEmail(e.target.value)}
              placeholder="Email" 
              className="w-full mb-4 p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              onChange={e => setPassword(e.target.value)}
              value={password} 
              name="password" 
              placeholder="Password" 
              className="w-full mb-4 p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
