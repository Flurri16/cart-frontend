import React from 'react'
import { Link } from 'react-router-dom'

export default function NewItem() {
  return (
    <div className='bg-slate-500 p-2 mb-4 hover:scale-110'>
        <Link to={``} >
            <img src="https://www.3daistudio.com/_next/image?url=%2FHeroShowcase%2FPikaPoster.jpg&w=1920&q=75" className="rounded max-w-[200px]" />
            <h1 className='pt-3 text-xl'>Example</h1>
        </Link>
    </div>
  )
}
