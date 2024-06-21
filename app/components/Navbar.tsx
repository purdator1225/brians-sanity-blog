import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

function Navbar() {
    return (

        <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5' >
            <Link href='/' className='font-bold text-3xl'>Brians<span className='text-green-400'>Sanity</span></Link>
            <Link href='/'>Link 2</Link>
            <Link href='/'>Link 3</Link>
            <ModeToggle/>
        </nav>

    )
}

export default Navbar