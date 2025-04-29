import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }

  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md p-4 hover:bg-slate-700">
      <div className="flex flex-col">
        <Link to={`/items/${item._id}`}>
          {item.imgUrl && (
            <img src={`http://localhost:5000${item.imgUrl}`} className="rounded" alt="Item" />
          )}
        </Link>
        <div className="">
          <Link to={`/items/${item._id}`} >
            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
            <p className="text-sm text-gray-300 mt-1">{item.text}</p>
          </Link>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-400 font-bold">{item.cost} ₽</span>
            <button 
              onClick={handleAddToCart} 
              className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
