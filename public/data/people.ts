import vcImage from "./../assets/faculty/Naman.svg";
import hodImage from "./../assets/faculty/Naman.svg";
import coordinator1 from "./../assets/faculty/Naman.svg";
import coordinator2 from "./../assets/faculty/Naman.svg";
import coordinator3 from "./../assets/faculty/Naman.svg";
import mentorImg from "./../assets/faculty/Naman.svg";
import presidentImg from "./../assets/domain/image.svg";
import vicePresidentImg from "./../assets/domain/image.svg";
import secretaryImg from "./../assets/technical/Yashraj.svg";
import tresurerImg from "./../assets/domain/image.svg";

interface Person {
  id: number;
  img: string;
  name: string;
  post: string;
}

export const collegeManagement: Array<Person> = [
  {
    id: 1,
    img: vcImage,
    name: "Upendra Dhar",
    post: "Vice Chancellor",
  },
  {
    id: 2,
    img: hodImage,
    name: "Anand Rajawat",
    post: "Head of Department",
  },
];
export const coordinators: Array<Person> = [
  {
    id: 1,
    img: coordinator1,
    name: "Prof. Gangeshwari Sharma",
    post: "Coordinator",
  },
  {
    id: 2,
    img: coordinator2,
    name: "Prof. Avdhesh Kumar Sharma",
    post: "Coordinator",
  },
  {
    id: 3,
    img: coordinator3,
    name: "Prof. Kamal Borana",
    post: "Coordinator",
  },
  {
    id: 4,
    img: mentorImg,
    name: "Naman Sisodiya",
    post: "mentor",
  },
];

export const boardMembers: Array<Person> = [
  {
    id: 1,
    img: secretaryImg,
    name: "Shivam Sharma",
    post: "President",
  },
  {
    id: 2,
    img: secretaryImg,
    name: "Tanay Nagde",
    post: "Vice President",
  },
  {
    id: 3,
    img: secretaryImg,
    name: "Sanskar Choubey",
    post: "Secretary",
  },
  {
    id: 4,
    img: secretaryImg,
    name: "Aditya Tiwari",
    post: "Tresurer",
  },
];

export const team: Array<Person> = [
  {
    id: 1,
    img: secretaryImg,
    name: "Mayank Matkar",
    post: "Development Joint Head",
  },
  {
    id: 2,
    img: secretaryImg,
    name: "Yashraj Sisodiya",
    post: "Technical Head",
  },
  {
    id: 3,
    img: secretaryImg,
    name: "Khushbu Gehlot",
    post: "P.R. Head",
  },
  {
    id: 4,
    img: secretaryImg,
    name: "Himanshu Agnihotri",
    post: "Marketing Head",
  },
  {
    id: 5,
    img: secretaryImg,
    name: "Kripansh Kumravat",
    post: "Development Joint Head",
  },
  {
    id: 6,
    img: secretaryImg,
    name: "Nirvighna",
    post: "Grapjic Lead",
  },
  {
    id: 7,
    img: secretaryImg,
    name: "Diya Verma",
    post: "Design Lead",
  },
  {
    id: 8,
    img: secretaryImg,
    name: "Kanishka Bhadavya",
    post: "Community Lead",
  },
];
