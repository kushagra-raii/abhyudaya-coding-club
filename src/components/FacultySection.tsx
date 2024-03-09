import React from 'react'
import FacultyCard from './FacultyCard'
import SectionDividerLine from './SectionDividerLine'
type Person  = {
    id: number;
    img: string;
    name: string;
    post: string;
  }

type FacultySectionProps = {
    faculties: Array<Person>,
}

const FacultySection = ({faculties}:FacultySectionProps) => {
  return (
    <section className=" w-11/12 mx-auto ">
    <h1 className=" text-4xl font-bold">VC & HOD</h1>
    <div className="flex gap-5">
      {faculties?.map((person) => (
        <FacultyCard key={person.id} person={person} />
      ))}
    </div>
    <SectionDividerLine />
  </section>
  )
}

export default FacultySection