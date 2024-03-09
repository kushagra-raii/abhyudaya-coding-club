import React from 'react'
import { team } from '../../../../public/data/people'
import TeamCard from  "@/components/TeamCard"
import TeamSection from '@/components/TeamSection'


const Team = () => {
  return (
    <TeamSection team={team}/>
  )
}

export default Team