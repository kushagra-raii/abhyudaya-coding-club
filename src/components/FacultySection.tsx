import React from 'react'
import FacultyCard from './FacultyCard'
import SectionDividerLine from './SectionDividerLine'
import { turret } from '@/app/(pages)/page'
import cx from "classnames"
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
  const cardsClass = cx({
    "flex":true,
    "flex-wrap":true,
    "gap-16":true,
    "justify-center":true,
    "gap-32":topManagement,
  })
  return (
    <section className=" w-11/12 mx-auto flex flex-col items-center gap-16  ">
    <h1 className={` text-4xl gap font-bold ${turret.className}`}>
      {
        topManagement ? "VC & HOD" : "Faculty coordinator and mentor"
      }
    </h1>
    <div className={cardsClass}>
      {faculties?.map((person) => (
        <FacultyCard key={person.id} person={person} isTopMgmt={topManagement} />
      ))}
    </div>
    <SectionDividerLine />
  </section>
  )
}

export default FacultySection