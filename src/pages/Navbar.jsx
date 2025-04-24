import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const isAuth = true
    const nickName = 'Nickname'
    return (
        <div>
            <nav className='flex justify-between py-5 px-5 items-center bg-slate-800'>
                <div className="flex items-center text-white">
                    <div className="text-white text-3xl">Bambuk</div>
                    <div className="text-white pl-5">{nickName}</div>

                </div>
                {
                    isAuth ? 
                    <div className="">
                        <ul className='flex gap-8'>
                            <li><NavLink to="/" className="py-2 px-4 bg-slate-400">Main</NavLink></li>
                            <li><NavLink to="/store" className="py-2 px-4 bg-slate-400">Store</NavLink></li>
                            <li><NavLink to="/profile" className="py-2 px-4 bg-slate-400">My profile</NavLink></li>
                        </ul>
                    </div> : null
                }
                <ul>
                    {
                        isAuth ?
                            <li><NavLink className='text-white text-2xl bg-yellow-400 py-2 px-4 bg-opacity-90 hover:bg-red-500' to='/login'>Log out</NavLink></li> :
                            <li><NavLink className='text-white text-2xl bg-yellow-400 py-2 px-4 bg-opacity-90 hover:bg-lime-500' to='/login'>Login</NavLink></li>
                    }
                </ul>
            </nav>
        </div>
    )
}
