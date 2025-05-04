// CheckoutForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
const CheckoutForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [sername, setSername] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [adress, setAdress] = useState('')
  const { cartItems } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)
  const [summ, setSumm] = useState(0)
  const handleCheckout = async (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    if (!name || !sername || !phone || !country || !adress) {
      alert("Please fill in all fields");
      return;
    }
    try {
      let message = `<b>Information:</b>\n`
      message += `<b>Name:</b>${name}\n`
      message += `<b>Sername:</b>${sername}\n`
      message += `<b>phone:</b>${phone}\n`
      message += `<b>country:</b>${country}\n`
      message += `<b>adress:</b>${adress}\n`
      const res = await axios.post('http://localhost:5000/api/telegram', {message})
      const response = await axios.post('http://localhost:5000/api/create-checkout-session', { cartItems })
      window.location.href = response.data.url  // перенаправляем на Stripe Checkout
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
  }
  
useEffect(() => {
  const total = cartItems.reduce((summ, nextItem) => summ + nextItem.cost * nextItem.quantity, 0)
  setSumm(total)
}, [cartItems])
  return (
    
    <div className="flex justify-center items-center mt-20 ">
      <form 
        className="w-full max-w-xl bg-slate-700 p-6 rounded shadow-md"
        // onSubmit={handleCheckout}
      >
        <h2 className="text-xl font-bold text-center mb-6">Input information:</h2>
        <div className="flex gap-4">
          <div className="flex flex-col w-[50%]">
          <input 
            type="text"
            name="firstName"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="w-full mb-4 p-2 border rounded text-black"
          />

          <input 
            type="text"
            name="sername"
            placeholder="Sername"
            onChange={(e) => setSername(e.target.value)}
            value={sername}
            required
            className="w-full mb-4 p-2 border rounded text-black"
          />

          <input 
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            className="w-full mb-4 p-2 border rounded text-black"
          />

          <input 
            type="text"
            name="Country"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            required
            className="w-full mb-4 p-2 border rounded text-black"
          />

          <input 
            type="text"
            name="address"
            placeholder="Adress"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
            required
            className="w-full p-2 border rounded text-black"
          />
          </div>
          <div className="flex flex-col bg-slate-600 p-4 w-[50%]">
            <h1><span className='font-semibold pr-4'>Name:</span> {name}</h1>
            <h1><span className='font-semibold pr-4'>Sername:</span> {sername}</h1>
            <h1><span className='font-semibold pr-4'>Phone:</span> {phone}</h1>
            <h1><span className='font-semibold pr-4'>Country:</span> {country}</h1>
            <h1><span className='font-semibold pr-4'>Adress:</span> {adress}</h1>
          </div>
        </div>

        <label >
          <p className='pb-6'>
          (Street name, street local, number )
          </p>
        </label>

        <button 
          type="submit"
        onClick={handleCheckout}
          className="w-full p-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-400 transition"
        >
          Pay
        </button>
      </form>
      <div className="bg-slate-700 p-4 rounded w-[20%] ml-[100px]">
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
                {/* <button type="button" className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400">Pay</button> */}
                </div> : null}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CheckoutForm;
