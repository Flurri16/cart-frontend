import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Cancel() {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/store')
  }, 3000)
    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">❌ Payment was canceled.</h1>
        <p className="mt-4">You rejected the payment. Please try again.</p>
      </div>
    )
}
