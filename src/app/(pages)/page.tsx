import Image from "next/image";
import { domain } from "../../../public/data/domain";
import { events } from "../../../public/data/upcomingEvent";
import photo from "@/../public/assets/domain/image.svg";
import DomainCard from "@/components/DomainCard";
import Button from "@/components/Button";
import SectionDividerLine from "@/components/SectionDividerLine";
import EventCard from "@/components/EventCard";
import ProjectCarausal from "@/components/ProjectCarausal";
import FacultySection from "@/components/FacultySection";
import {
  boardMembers,
  collegeManagement,
  coordinators,
} from "@/../public/data/people";
import Faqs from "@/components/Faqs";
import TeamSection from "@/components/TeamSection";
// import TurretRoad from "@next/font/google/Turret+Road";

export default function Home() {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main className="bg-rich-blue-bg w-full  text-white">
      <section id="hero" className=" w-11/12 mx-auto p-5 pt-11 ">
        <div className="flex gap-10 ">
          <div className=" w-[60%] flex flex-col gap-5">
            <h1 className={`text-4xl myShadow text-primary-heading`}>
              Abhyudaya - Coding club
            </h1>
            <p className=" text-3xl  leading-[45.8px]">
              The SVIIT Coding Club offers students a dynamic platform to learn,
              practice, and excel in coding. it welcomes individuals of all
              skill levels. Through engaging in coding competitions, hackathons,
              and a shared passion for technology, the club transforms ideas
              into reality. Every member, whether novice or experienced,
              contributes and is valued, creating a welcoming space for growth,
              knowledge-sharing, and inspiration in the exciting realm of coding
              and technology.
            </p>
          </div>
          <div>
            <Image loading="lazy" src={photo} alt="abhyudaya" />
          </div>
        </div>
        <SectionDividerLine />
      </section>
      <section
        id="domain"
        className="w-11/12 mx-auto p-5 pt-11 flex flex-col items-center"
      >
        <h1 className=" text-4xl font-bold">Our Domains</h1>
        <div className="grid grid-cols-3 mt-10 w-full  mx-auto  justify-items-center  items-center  p-5 gap-5">
          {domain?.map((item) => {
            return <DomainCard key={item.id} domain={item} />;
          })}
        </div>
        <Button text="View More" rounded={true} linkTo="/" />
        <SectionDividerLine />
      </section>
      <section
        id="events"
        className="w-11/12 mx-auto p-5 flex flex-col items-center gap-9"
      >
        <h1 className=" text-4xl font-bold">Upcoming Events</h1>
        <div>
          {events?.map((item) => {
            return (
              <EventCard
                heading={item.heading}
                key={item.id}
                img={item.img}
                desc={item.desc}
              />
            );
          })}
        </div>
        <SectionDividerLine />
      </section>
      <section id="projects" className=" w-10/12 mx-auto flex flex-col gap-10">
        <h1 className=" text-4xl font-bold mx-auto">Projects</h1>
        <div>
          <ProjectCarausal />
        </div>
        <div className=" mx-auto">
          <Button text="View More" rounded={true} linkTo="/" />
        </div>
        <SectionDividerLine />
      </section>
      <section id="aboutCollege" className=" w-11/12 mx-auto ">
        <h1 className=" font-bold text-4xl">About college</h1>
        <div className="flex gap-10">
          <Image src={photo} alt="" />
          <div className="flex flex-col gap-10">
            <h2 className=" text-3xl font-semibold">
              Shri Vaishnav Vidyapeeth Vishwavidyalaya
            </h2>
            <p>
              Shri Vaishnav Vidyapeeth Trust believes in taking the nation
              forward by improving the quality of life of its citizens by
              continuously working in the sphere of education, health and
              environment.To create an educational environment that engages deep
              intellectual moral and spiritual stimulation there by nurturing
              leadership. To impact learning through understanding knowledge
              enrichment skill development and positive attitude formation.To
              encourage innovation thinking with self discipline & social
              responsibility.
            </p>
          </div>
        </div>
        <SectionDividerLine />
      </section>
      <FacultySection faculties={collegeManagement} />
      <FacultySection faculties={coordinators} />
  

      <div>
        <TeamSection team={boardMembers} />
        <Button linkTo="/team" text="View more" rounded={true} />
        <SectionDividerLine/>
      </div>


      <section id="faqs" className="">
        <h1 className="mx-auto text-3xl font-bold">FAQs</h1>
        <Faqs />
      </section>
    </main>
  );
}
