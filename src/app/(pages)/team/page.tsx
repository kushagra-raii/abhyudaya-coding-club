import React from 'react'
import { team } from '../../../../public/data/people'
import TeamCard from  "@/components/TeamCard"


const Team = () => {
  return (
    <div className="bg-rich-blue-bg w-full  text-white h-screen ">
        <div className=' w-11/12 mx-auto flex flex-col items-center gap-8'>
        <h1 className='text-4xl font-bold'>Our Team</h1>
      <div className='grid grid-cols-4 gap-10'>
      {team.map((person) => (
            <TeamCard key={person.id} person={person} />
          ))} 
      </div>
        </div>
    </div>
  )
}

export default Team