import React from 'react'
import FacultyCard from './FacultyCard'
import SectionDividerLine from './SectionDividerLine'
import { turret } from '@/app/(pages)/page'
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
  const topManagement = faculties[0].post === "Vice Chancellor";
 
  return (
    <section className=" w-11/12 mx-auto flex flex-col items-center gap-16  ">
    <h1 className={` text-4xl font-bold ${turret.className}`}>
      {
        topManagement ? "VC & HOD" : "Faculty coordinator and mentor"
      }
    </h1>
    <div className="flex flex-wrap gap-16 justify-center">
      {faculties?.map((person) => (
        <FacultyCard key={person.id} person={person} isTopMgmt={topManagement} />
      ))}
    </div>
    <SectionDividerLine />
  </section>
  )
}

export default FacultySection