import React, { useState } from 'react'
import CartItem from './CartItem'
import NewItem from './NewItem'
import { useSelector } from 'react-redux'

export default function Store() {
  const [itemsCart, setItemsCart] = useState([])
  const {user} = useSelector(state => state.auth)
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-[minmax(200px,_250px)_1fr_250px] gap-6 w-full  px-4 py-8">

        {/* Левая колонка — Новинки */}
        <div className="bg-slate-700 p-4 rounded overflow-hidden">
          <h2 className="text-lg font-semibold mb-4">Новинки</h2>
          <NewItem></NewItem>
          <NewItem></NewItem>
        </div>

        {/* Центральная колонка — Товары */}
        <main>
          <h2 className="text-2xl font-bold mb-6">Товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </main>

        {/* Правая колонка — Корзина */}
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Корзина</h2>
          {
            !user ? <div>Login To see your cart.</div> : 
            <div className="">
              {itemsCart.length === 0 ? (
                <p className="text-sm text-gray-500">Корзина пуста</p>
              ) : null
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
