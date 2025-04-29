import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/itemSlice'
import { toast } from 'react-toastify'

const AddProductPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [cost, setCost] = useState('')
    const [image, setImage] = useState(null)
    const {message} = useSelector(state => state.items)
    const dispatch = useDispatch()

    const submitHandler = () => {
        try {
            const postData = { title, text, cost, image }
            const formData = new FormData()
            formData.append('title', title)
            formData.append('text', text)
            formData.append('cost', cost)
            if (postData.image) {
                formData.append('image', image)
            }
            dispatch(addItem(formData))
            toast(message)
            setText('')
            setTitle('')
            setCost('')
            setImage(null)
        } catch(err) {
            console.log(err)
        }
    }

    const clearFormHandler = () => {
        setText('')
        setTitle('')
        setCost('')
        setImage(null)
    }

    return (
        <form className='w-1/3 mx-auto py-10 text-2xl' onSubmit={(e) => e.preventDefault()}>
            <label className='text-gray-300 py-2 bg-gray-600 text-3xl mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
                Pin the image:
                <input type="file" className='hidden'  onChange={(e) => setImage(e.target.files[0])}/>
            </label>

            {image && (
                <div className='flex object-cover py-2'>
                    <img src={URL.createObjectURL(image)} alt="preview" className="w-full" />
                </div>
            )}

            <label className='text-white opacity-70'>
                Title of item: 
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700' />
            </label>

            <label className='text-white opacity-70'>
                Cost
                <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder='cost' className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700' />
            </label>

            <label className='text-white opacity-70'>
                Text of item:
                <textarea placeholder='text' value={text} onChange={(e) => setText(e.target.value)} className='mt-1 text-black w-full resize-none h-40 rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700' />
            </label>

            <div className='flex gap-8 items-center justify-center mt-4'>
                <button className='flex justify-center items-center bg-gray-600 text-white rounded-sm py-2 px-4' onClick={submitHandler}>
                    Add item
                </button>
                <button className='flex justify-center items-center bg-red-500 text-white rounded-sm py-2 px-4' onClick={clearFormHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default AddProductPage
