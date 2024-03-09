import React from 'react'
import svvvLogo from "@/../public/assets/header/SVVV.svg"
import Image from 'next/image'
import { navData } from '../../public/data/navData'
import Link from 'next/link'
const Header = () => {
  return (
    <header className=' bg-rich-blue-bg opacity-95'>
       
            <div className=' w-11/12 mx-auto flex items-center justify-between p-2'>
            <Image  src={svvvLogo} className='' alt=''/>
            <nav className='text-white flex gap-5'>
                {
                    navData.map((item,index)=>(<Link href={item.path} key={index}>{item.title}</Link>))
                }
            </nav>
            <div></div>
            </div>
        
    </header>
  )
}

export default Header