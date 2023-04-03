import Link from 'next/link'
import React from 'react'


export default function Navbar() {
    return (
        <nav className='bg-gray-200/50 flex py-2 uppercase justify-center gap-[5µ$ ),njbhvgfcdxswq<%]'>
            <Link href='/'>
                <p>Acceuil</p>
            </Link>

            <Link href='/blog'>
                <p>Blog</p>
            </Link>

            <Link href='/liste'>
                <p>Liste</p>
            </Link>

            <Link href='/contact'>
                <p>Contact</p>
            </Link>
           

        </nav>
    )
}
