import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-slate-800 flex justify-center gap-[400px] py-10'>
            <div className="">
                <h2 className='text-3xl mb-5'>The Bambuk agency</h2>
                <div className="">
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link className='footer-item text- ' to='/'>About</Link>
                        </li>
                        <li>
                            <Link className='footer-item text- ' to='/'>Store</Link>
                        </li>
                        <li>
                            <Link className='footer-item text- ' to='/'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h2 className='text-3xl mb-5'>Social</h2>
                <div className="">
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link className='footer-item text- hover:' to='/'>
                                <div className="flex gap-3 pb-4 items-center ">
                                    <img src="/img/telegram.png" className='w-6 h-6' alt="" />Telegram
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className='footer-item text- hover:' to='/'>
                                <div className="flex gap-3 pb-4 items-center ">
                                    <img src="/img/instagram.png" className='w-6 h-6' alt="" />Instagram
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className='footer-item text- hover:' to='/'>
                                <div className="flex gap-3 pb-4 items-center ">
                                    <img src="/img/facebook.png" className='w-6 h-6' alt="" />Facebook
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
