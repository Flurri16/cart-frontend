import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { toast } from 'react-toastify'

export default function Navbar() {
    const isAuth = true
    const nickName = 'Nickname'
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        toast("You was loginned out")
    }
    return (
        <div>
            <nav className='flex justify-between py-5 px-5 items-center bg-slate-800'>
            <div className="text-white text-3xl">Bambuk</div>

                {
                    isAuth ? 
                    <div className="">
                        <ul className='flex gap-8'>
                            <li><NavLink to="/" className="py-2 px-4 hover:bg-slate-700">Main</NavLink></li>
                            <li><NavLink to="/store" className="py-2 px-4 hover:bg-slate-700">Store</NavLink></li>
                            <li><NavLink to="/profile" className="py-2 px-4 hover:bg-slate-700">My profile</NavLink></li>
                        </ul>
                    </div> : null
                }
                <ul>
                    {
                        isAuth ?
                            <div className='flex items-center'><h1>{nickName}</h1><li><button onClick={logoutHandler} className='text-white text-2xl bg-yellow-400 py-2 px-4 ml-4 bg-opacity-90 hover:bg-red-500'>Log out</button></li></div> :
                            <li><NavLink className='text-white text-2xl bg-yellow-400 py-2 px-4 bg-opacity-90 hover:bg-lime-500' to='/login'>Login</NavLink></li>
                    }
                </ul>
            </nav>
        </div>
    )
}
