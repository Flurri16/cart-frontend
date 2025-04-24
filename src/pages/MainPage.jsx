import React from 'react'
import TodoItem from './TodoItem'

export default function MainPage() {
  return (
    <div className='w-[80%] my-0 mx-auto'>
      <div className="mt-10">
        <h1 className='text-5xl'>Add todo: </h1>
        <form>
          <input type="text" placeholder='Todo text' className='w-[100%] border border-gray-300 rounded px-4 py-2 text-lg my-3'/>
          <button className='w-[100%] bg-blue-500 text-white text-3xl py-3 mt-3'>Create todo</button>
        </form>
      </div>
      <div className="mt-10">
      <h1 className='text-5xl'>Active todos:</h1>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  )
}
