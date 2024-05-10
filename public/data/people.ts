import adityaTiwari from "./../assets/faculty/aditya-tiwari.svg";
import anandRajavatHodSir from "./../assets/faculty/anand-rajavat-hod.svg";
import avdheshKumar from "./../assets/faculty/avdhesh-kumar.svg";
import gangeshwarisSharma from "./../assets/faculty/gangeshwari-sharma.svg";
import kamalBorana from "./../assets/faculty/kamal-borana.svg";
import tanayNagde from "./../assets/faculty/sanskar-choubey.svg";
import shivamSharma from "./../assets/faculty/shivam-sharma.svg";
import sanskarChaubey from "./../assets/faculty/tanay-nagde.svg";
import viceChancellor from "./../assets/faculty/vice-chancellor.svg";
import secretaryImg from "./../assets/technical/Yashraj.svg";
import mayank from "./../assets/technical/Mayank.svg";
import nirvighna from "./../assets/technical/Nirvighna.svg";
import diya from "./../assets/technical/diya.svg";
import kanishka from "./../assets/technical/kanishka.svg";
import himanshu from "./../assets/technical/Himanshu.svg";
import khushboo from "./../assets/technical/Khushboo.svg";
import kripansh from "./../assets/technical/kripansh.svg";
import naman from "./../assets/faculty/Naman.svg";


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

export const mentors: Array<Person> = [
  {
    id: 1,
    img: naman,
    name: "Sanskar Choubey",
    post: "mentor",
  },
  {
    id: 2,
    img: naman,
    name: "Naman Sisodiya",
    post: "mentor",
  },

]
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
    img: secretaryImg,
    name: "Yashraj Sisodiya",
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
    img: mayank,
    name: "Mayank Matkar",
    post: "Development Joint Head",
  },
  {
    id: 2,
    img: secretaryImg,
    name: "Varun Agrawal",
    post: "Technical Head",
  },
  {
    id: 3,
    img: khushboo,
    name: "Khushbu Gehlot",
    post: "P.R. Head",
  },
  {
    id: 4,
    img: himanshu,
    name: "Himanshu Agnihotri",
    post: "Marketing Head",
  },
  {
    id: 5,
    img: kripansh,
    name: "Kripansh Kumravat",
    post: "Development Joint Head",
  },
  {
    id: 6,
    img: nirvighna,
    name: "Nirvighna Chavan",
    post: "Graphic Lead",
  },
  {
    id: 7,
    img: diya,
    name: "Diya Verma",
    post: "Design Lead",
  },
  {
    id: 8,
    img: kanishka,
    name: "Kanishka Bhadavya",
    post: "Community Lead",
  },
];
