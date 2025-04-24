import React from 'react'
import CartItem from './CartItem'

export default function Store() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

