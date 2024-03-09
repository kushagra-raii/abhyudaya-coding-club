import React from 'react'
import Button from './Button'
import Image from 'next/image'

type EventCardProps = {
    heading: string,
    desc: string,
    img: string
}

const EventCard = ({heading,desc,img}:EventCardProps) => {
  return (
    <div className='flex gap-6'>
        <div>
            <Image src={img} loading='lazy' alt='event' width={400} height={500} />
        </div>
        <div className=' flex flex-col justify-between'>
            <h1>{heading}</h1>
            <p>{desc}</p>
            <div>
            <Button text='RSVP NOW' rounded={false} linkTo='/' />
            </div>
        </div>
    </div>
  )
}

export default EventCard