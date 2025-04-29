import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {deleteItem} from '../redux/itemSlice.js'
import { toast } from 'react-toastify'
export default function ItemPage() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const isAdmin = useSelector(state => state.auth.user)
  const {message} = useSelector(state => state.items)
  console.log(message)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const removeHandler = async () => {
    try {
      dispatch(deleteItem(item._id))
      toast(message)
      navigate('/store')
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await axios.get(`http://localhost:5000/api/items/${id}`)
        setItem(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchItem()
  }, [id])

  if (!item) {
    return <div className="flex items-center justify-center min-h-screen text-white text-xl">Загрузка...</div>
  }

  return (
    <div className=" bg-gray-900 text-white flex flex-col items-center p-8">
      <div className="max-w-4xl flex flex-col md:flex-row bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {item.imgUrl && (
          <div className="md:w-1/2">
            <img 
              src={`http://localhost:5000${item.imgUrl}`} 
              alt="Item" 
              className="object-cover h-full w-full" 
            />
          </div>
        )}
        <div className=" p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-300 mb-6">{item.text}</p>
          <p className="text-yellow-400 text-3xl font-bold">{item.cost} ₽</p>
          {
            isAdmin.email === 'admin@gmail.com' && (
              <div className="">
                <button className='bg-red-600 py-2 px-4 rounded mt-3' onClick={removeHandler}>Delete</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
