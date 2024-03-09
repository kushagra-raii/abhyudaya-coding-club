import React from 'react'
import Image from 'next/image'
import cx from 'classnames'

interface DomainCardProps {
    domain: {
        id: number;
        name: string;
        img: string;
    }
}
 
const DomainCard = ({domain}:DomainCardProps) => {
 
  return (

  <div className='flex items-center  flex-col'>
     <Image height={550} className=' w-fit  rounded-t-lg' src={domain.img} alt={domain.name}/>
     <div className='bg-white text-black rounded-b-lg w-full p-5 opacity-40'>

      <p className='text-center' >{domain.name}</p>
     </div>
 </div>
  )
}

export default DomainCard