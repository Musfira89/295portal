import React from 'react'
import Buttons from '../buttons'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full py-6 shadow-lg flex justify-between px-10 bg-[#ff914d]'>
            <h1>296plan</h1>
            <div className='flex items-center gap-4 text-slate-100 text-md tracking-wide font-medium'>
                <Link href="/dashboard" className='hover:text-black'>Dashboard</Link>
                <Link href="/dashboard/earnings" className='hover:text-black'>Earnings</Link>
                <button className='bg-gray-700 hover:bg-gray-900 text-gray-200 text-sm px-4 py-2 rounded-full'>Sign Out</button>
            </div>
        </nav>
    )
}

export default Navbar