"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from '../../public/data/projects';
import ProjectCard from './ProjectCard';

const ProjectCarausal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
       {
        projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />
        })
       }
    </Slider>
  )
}


export default ProjectCarausal