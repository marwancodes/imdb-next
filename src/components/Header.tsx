import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';



const Header = () => {
  return (
    
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        {/*___ Menu Section ___*/}
        <div className='flex gap-4'>
            <MenuItem title="home" address="/" Icon={AiFillHome}/>
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        {/*___ Logo Section ___*/}
        <div className='flex items-center gap-4'>
            <DarkModeSwitch />
            <Link href={'/'}>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            </Link>
        </div>
    </div>
  )
}

export default Header