import React from "react";
import Image from "next/image";

type Props = {
  project: {
    id: number;
    heading: string;
    features: Array<string>;
    img: string;
    desc?: string;
  };
};
const ProjectCard = ({ project }: Props) => {
    const {heading,img,desc,features}= project;
  return (
    <div>
      <Image src={img} alt="" loading="lazy" />
      <h1>{heading}</h1>
      <div>
        {desc && <p>{desc}</p>}
        <p>Features :-</p>
        <ol>
          {features?.map((points, index) => (
            <li key={index}>{points}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProjectCard;
