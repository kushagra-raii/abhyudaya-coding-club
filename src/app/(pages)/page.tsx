import Image from "next/image";
import { domainFirstLine, domainSecondLine } from "../../../public/data/domain";
import { events } from "../../../public/data/upcomingEvent";
import photo from "@/../public/assets/domain/image.svg";
import DomainCard from "@/components/DomainCard";
import Button from "@/components/common/Button";
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
import { Turret_Road } from "next/font/google";
import DomainRow from "@/components/DomainRow";
import domainsGradient from "@/../public/assets/ellipse/domainsEllipse.svg";

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-rich-blue-bg w-full text-white">
      <section id="hero" className=" w-11/12 mx-auto p-5 pt-11 max-w-[110rem]">
        <div className="flex flex-col-reverse md:items-center md:flex-row gap-10 ">
          <div className="md:w-3/5 flex flex-col gap-5">
            <h1
              className={`font-extrabold text-2xl sm:text-4xl ${turret.className} myShadow text-primary-heading`}
            >
              Abhyudaya - Coding club
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl">
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
          <div className="lg:w-2/5">
            <Image
              loading="lazy"
              src={photo}
              alt="abhyudaya"
              className="h-auto w-full"
            />
          </div>
        </div>
        <SectionDividerLine />
      </section>

      <section
        id="domain"
        className="relative  w-11/12 mx-auto p-5 pt-11 flex flex-col items-center"
      >
        <h1 className=" text-4xl font-bold">Our Domains</h1>
        <div className="flex z-10 flex-col mt-10 w-full  mx-auto  justify-items-center  items-center  p-5 gap-5">
          <DomainRow domainArr={domainFirstLine} />
          <DomainRow domainArr={domainSecondLine} />
        </div>
        <Button text="View More" rounded={true} linkTo="/" />
        <SectionDividerLine />
        <div className="shapeAtDomain"></div>
      </section>

      <section
        id="events"
        className="w-10/12 mx-auto p-5 flex flex-col items-center gap-9"
      >
        <h1 className={`text-4xl font-extrabold ${turret.className}`}>
          Upcoming Events
        </h1>
        <div className="flex justify-center ">
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

      <section
        id="aboutCollege"
        className=" w-10/12 mx-auto flex flex-col items-center gap-8"
      >
        <h1 className={`${turret.className} font-extrabold text-4xl`}>
          About college
        </h1>
        <div className="flex gap-20 justify-center items-start flex-wrap">
          <div className="lg:w-[45%] h-[400px] border-8  rounded-3xl p-2 mt-2 ">
            <Image src={photo} alt="" />
          </div>

          <div className="flex flex-col gap-10 lg:w-[45%] px-10">
            <h2 className={`text-2xl font-semibold `}>
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

      <TeamSection team={boardMembers} />
      <div className="flex justify-center">
        <Button linkTo="/team" text="View more" rounded={true} />
      </div>
      <SectionDividerLine />

      <section id="faqs" className="flex flex-col items-center gap-4">
        <h1 className={`mx-auto text-3xl font-bold ${turret.className}`}>
          FAQs
        </h1>
        <Faqs />
      </section>
    </main>
  );
}
