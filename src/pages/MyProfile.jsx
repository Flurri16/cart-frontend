import React from 'react'
import {useSelector} from 'react-redux'
import { isAuthInSlice } from '../redux/authSlice'
export default function MyProfile() {
    const isAuth = useSelector(isAuthInSlice)
  return (
    <div className='w-[80%] mx-auto'>
        {
            !isAuth ? <h1>Please login</h1> : 
            <div className="">
                MY profile
            </div>
        }
    </div>
  )
}
