import React from 'react'

export default function MyProfile() {
    const isAuth = false
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
