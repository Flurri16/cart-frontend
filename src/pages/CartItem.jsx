import React from 'react'

export default function CartItem() {
  return (
<div className="w-[500px] bg-gray-800 text-white rounded-xl shadow-md p-4">
  <img src="https://www.3daistudio.com/_next/image?url=%2FHeroShowcase%2FPikaPoster.jpg&w=1920&q=75" className="rounded w-[100px]" />
  <h2 className="text-lg font-semibold mt-4">Название модели</h2>
  <p className="text-sm text-gray-300 mt-1">Описание модели</p>
  <div className="flex justify-between items-center mt-4">
    <span className="text-yellow-400 font-bold">149₽</span>
    <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">В корзину</button>
  </div>
</div>

  )
}
