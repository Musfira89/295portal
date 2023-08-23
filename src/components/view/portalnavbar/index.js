import React from 'react'
import Buttons from '../buttons'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full py-6 shadow-lg flex justify-between px-10'>
            <h1>296plan</h1>
            <div className='flex gap-4'>
                <Link href='/campaign'> <Buttons text={'Create campaign'} width={'w-40'} /></Link>
                <Link href='/employees'> <Buttons text={'Employees'} width={'w-40'} /></Link>
            </div>
        </nav>
    )
}

export default Navbar