import React from 'react'
import Buttons from '../buttons'

const Navbar = () => {
    return (
        <nav className='w-full py-6 shadow-lg flex justify-between px-10'>
            <h1>296plan</h1>
            <div className='flex gap-4'>
                <Buttons text={'Create campaign'} width={'w-40'} />
                <Buttons text={'Employees'} width={'w-40'} />
            </div>
        </nav>
    )
}

export default Navbar