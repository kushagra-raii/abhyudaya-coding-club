import React from 'react'
import Carousel from './Carousal'

import { projects } from "../../public/data/projects";
import ProjectCard from "./ProjectCard";
import { turret } from '@/app/(pages)/page';

const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center gap-5 my-5'>
        <h1 className={`${turret.className} text-4xl font-extrabold `}>
            Projects
        </h1>
        <Carousel >
        {projects?.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
        </Carousel>
    </div>
  )
}

export default ProjectSection