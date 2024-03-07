import webdev from "./../assets/domain/image.svg";
import cloud from "./../assets/domain/image.svg";
import python from "./../assets/domain/image.svg";
import UIUX from "./../assets/domain/image.svg";
import AIML from "./../assets/domain/image.svg";
import android from "./../assets/domain/image.svg";

export const domain: Array<{ id: number; name: string; img: string }> = [
  {
    id: 1,
    name: "Cloud",
    img: cloud,
  },
  {
    id: 2,
    name: "WEB DEV",
    img: webdev,
  },
  { id: 3, name: "UI/UX", img: UIUX },
  {
    id: 4,
    name: "Python",
    img: python,
  },
  {
    id: 5,
    name: "AI/ML",
    img: AIML,
  },
  { id: 6, name: "Android", img: android },
];
