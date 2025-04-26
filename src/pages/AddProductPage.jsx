import React, {useState} from 'react';

const AddPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [cost, setCost] = useState('')

    const submitHandler = () => {
        try {
        } catch(err) {
            console.log(err)
        }
    }
    const clearFormHandler = () => {
        setText('')
        setTitle('')
    }
    return (
        <form className='w-1/3 mx-auto py-10 text-2xl' onSubmit={(e) => e.preventDefault()}>
        <label className='text-gray-300 py-2 bg-gray-600 text-3xl mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
            Pin the image:
            <input type="file" className='hidden' />
        </label>
        <div className='flex object-cover pw-2'>
            img
        </div>
        <label className=' text-white opacity-70'>
            Title of item: 
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700'/>
        </label>
        <label className=' text-white opacity-70'>
            Cost 
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder='cost' className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700'/>
        </label>
        <label className=' text-white opacity-70'>
            Text of item: 
            <textarea placeholder='text' value={text} onChange={(e) => setText(e.target.value)}  className='  mt-1 text-black w-full resize-none h-40 rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700'/>
        </label>
        <div className='flex gap-8 items-center justify-center mt-4'>
            <button className='flex justify-center items-center bg-gray-600  text-white rounded-sm py-2 px-4' onClick={submitHandler}>Add item</button>
            <button className='flex justify-center items-center bg-red-500  text-white rounded-sm py-2 px-4' onClick={clearFormHandler}>Cancel</button>
        </div>
    </form>
    );
}

export default AddPostPage;
