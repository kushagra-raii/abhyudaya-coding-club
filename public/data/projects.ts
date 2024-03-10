import collegeJagat from "./../assets/domain/image.svg";
import bhojanalya from "./../assets/domain/image.svg";
import busTrackingSystem from "./../assets/domain/image.svg";
import random from "./../assets/domain/image.svg";

export const projects: Array<{
  id: number;
  heading: string;
  features: Array<string>;
  img: string;
  desc?: string;
}> = [
  {
    id: 1,
    heading: "COLLEGE JAGAT",
    features: ["Notice Board", "Study Material Section"],
    img: collegeJagat,
    desc: "It is a college hub website",
  },
  {
    id: 2,
    heading: "BHOJANALAY",
    features: ["Make Cashless payment using tokens.", "Rewards/ offers."],
    img: bhojanalya,
  },
  {
    id: 3,
    heading: "BUS TRACKING SYSTEM ",
    features: [
      "Bus board information (we can track bus easily)",
      "College bus navigation.",
    ],
    img: busTrackingSystem,
  },
  
];
