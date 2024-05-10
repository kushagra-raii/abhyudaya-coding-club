import React from "react";
import { team } from "../../../../public/data/people";
import TeamSection from "@/components/TeamSection";
import { turret } from "../page";
import FacultyCard from "@/components/FacultyCard";
import SectionDividerLine from "@/components/SectionDividerLine";
import {mentors} from "@/../public/data/people"



const Team = () => {
  return (
    <div className="bg-rich-blue-bg w-full text-white min-h-screen">
      <section className="w-11/12 mx-auto flex flex-col items-center gap-x-16 gap-y-4 ">
      <h1
        className={`text-3xl text-center lg:text-start lg:text-4xl  font-bold pt-12 ${turret.className}`}
      >
        Our Mentors
      </h1>
      <div className={`flex flex-wrap gap-16 gap-x-32 justify-center`}>
        {mentors?.map((person) => (
          <FacultyCard
            key={person.id}
            person={person}
            isTopMgmt={true}
          />
        ))}
      </div>
      <SectionDividerLine />
    </section>
      <TeamSection team={team} />
    </div>
  );
};

export default Team;
