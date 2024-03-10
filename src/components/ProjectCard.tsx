import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  project: {
    id: number;
    heading: string;
    features: Array<string>;
    img: string;
    desc?: string;
  };
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { heading, img, desc, features } = project;
  return (
    <div className="flex flex-col ">
      <div className="xl:h-[350px] h-[409px] lg:h-[284px] lg:w-[282px] xl:w-[350px] border-8 rounded-3xl p-8">
        <Image src={img} alt="" loading="lazy" />
      </div>
      <h1 className="w-full text-center font-bold text-2xl my-2">{heading}</h1>
      <div className="flex flex-col items-center    ">
        
        <div className="max-w-[70%] flex flex-col gap-2">
        {desc && <p>{desc}</p>}
        <p className="mb-[-8px]">Features :-</p>
        <ol className="flex flex-col list-disc  ">
          {features?.map((points, index) => (
            <li key={index}>{points}</li>
          ))}
        </ol>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
