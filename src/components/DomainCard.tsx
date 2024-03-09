import React from 'react'
import a from "@/../public/assets/domain/image.svg"
import Image from 'next/image'

interface props {
    domain: {
        id: number;
        name: string;
        img: string;
    }
}
 
const DomainCard = ({domain}:props) => {
  return (
    <div className=' rounded-xl flex flex-col bg-white text-black '>
        <Image className='' src={a} alt=''/>
        <p className='  h-11'>{domain.name}</p>
    </div>
  )
}

export default DomainCard