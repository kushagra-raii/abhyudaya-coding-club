import adityaTiwari from "./../assets/faculty/aditya-tiwari.svg";
import anandRajavatHodSir from "./../assets/faculty/anand-rajavat-hod.svg";
import avdheshKumar from "./../assets/faculty/avdhesh-kumar.svg";
import gangeshwarisSharma from "./../assets/faculty/gangeshwari-sharma.svg";
import kamalBorana from "./../assets/faculty/kamal-borana.svg";
import sanskarChaubey from "./../assets/faculty/sanskar-choubey.svg";
import shivamSharma from "./../assets/faculty/shivam-sharma.svg";
import tanayNagde from "./../assets/faculty/tanay-nagde.svg";
import viceChancellor from "./../assets/faculty/vice-chancellor.svg";
import secretaryImg from "./../assets/technical/Yashraj.svg";

interface Person {
  id: number;
  img: string;
  name: string;
  post: string;
}

export const collegeManagement: Array<Person> = [
  {
    id: 1,
    img: viceChancellor,
    name: "Upendra Dhar",
    post: "Vice Chancellor",
  },
  {
    id: 2,
    img: anandRajavatHodSir,
    name: "Anand Rajawat",
    post: "Head of Department",
  },
];
export const coordinators: Array<Person> = [
  {
    id: 1,
    img: gangeshwarisSharma,
    name: "Prof. Gangeshwari Sharma",
    post: "Coordinator",
  },
  {
    id: 2,
    img: avdheshKumar,
    name: "Prof. Avdhesh Kumar Sharma",
    post: "Coordinator",
  },
  {
    id: 3,
    img: kamalBorana,
    name: "Prof. Kamal Borana",
    post: "Coordinator",
  },
  // {
  //   id: 4,
  //   img: mentorImg,
  //   name: "Naman Sisodiya",
  //   post: "mentor",
  // },
];

export const boardMembers: Array<Person> = [
  {
    id: 1,
    img: shivamSharma,
    name: "Shivam Sharma",
    post: "President",
  },
  {
    id: 2,
    img: tanayNagde,
    name: "Tanay Nagde",
    post: "Vice President",
  },
  {
    id: 3,
    img: sanskarChaubey,
    name: "Sanskar Choubey",
    post: "Secretary",
  },
  {
    id: 4,
    img: adityaTiwari,
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
