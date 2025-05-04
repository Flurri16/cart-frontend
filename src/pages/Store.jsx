import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import NewItem from './NewItem'
import { getAllItems } from '../redux/itemSlice'
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Store() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector(state => state.items)
  const { user } = useSelector(state => state.auth)
  const { cartItems } = useSelector(state => state.cart)
  const [summ, setSumm] = useState(0)

  const handleCheckout = async () => {
  navigate('/checkout')
  }
useEffect(() => {
  const total = cartItems.reduce((summ, nextItem) => summ + nextItem.cost * nextItem.quantity, 0)
  setSumm(total)
}, [cartItems])
  useEffect(() => {
    dispatch(getAllItems()) // Загружаем товары при загрузке страницы
  }, [dispatch])

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-[minmax(200px,_250px)_1fr_300px] gap-6 w-full  px-4 py-8">

        {/* Левая колонка — Новинки */}
        <div className="bg-slate-700 p-4 rounded overflow-hidden">
          <h2 className="text-lg font-semibold mb-4">News:</h2>
          <NewItem />
          <NewItem />
        </div>

        {/* Центральная колонка — Товары */}
        <main>
          <h2 className="text-2xl font-bold mb-6">Goods:</h2>
          <div className="grid grid-cols-4 gap-4">
            {items.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        </main>

        {/* Правая колонка — Корзина */}
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Your cart:</h2>
          {
            !user ? (
              <div>Login To see your cart.</div>
            ) : (
              <div>
                {/* Здесь можно вывести содержимое корзины */}
                {cartItems.map(el => (
                  <div key={el._id} className="bg-slate-800 flex flex-col my-3 p-4 rounded-md">
                    <div className="flex justify-center">
                      <img src={`http://localhost:5000${el.imgUrl}`} className='mb-4' alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <h1 className='text-2xl'>{el.cost}</h1>
                        <p className='text-2xl'>zł</p>
                        <p className='text-2xl'>x</p>
                        <p className='text-2xl'>{el.quantity}</p>
                      </div>
                      <div className="flex gap-4">
                        <button onClick={() => dispatch(addToCart(el))} className='text-xl py-1 px-3 bg-green-600 rounded'>+</button>
                        <button onClick={() => dispatch(removeFromCart(el))} className='text-xl py-1 px-3 bg-red-600 rounded'>-</button>
                      </div>
                    </div>
                  </div>
                ))}
                
               
                {cartItems.length > 0 ?  <div className="">
                  <h1 className='text-2xl font-semibold py-3'>Summ: {summ} zł</h1> 
                  <button onClick={handleCheckout} className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">Pay</button>
                  </div> : null}
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}

