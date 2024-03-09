import React from 'react'
import TeamCard from './TeamCard';

type Person  = {
    id: number;
    img: string;
    name: string;
    post: string;
  }

type TeamSectionProps = {
    team: Array<Person>,
}

const TeamSection = ({team}:TeamSectionProps) => {
  return (
    <section className=" w-11/12 mx-auto ">
    <h1 className=" text-4xl font-bold">VC & HOD</h1>
    <div className="flex gap-5">
      {team?.map((person) => (
        <TeamCard key={person.id} person={person} />
      ))}
    </div>
  </section>
  )
}

export default TeamSection