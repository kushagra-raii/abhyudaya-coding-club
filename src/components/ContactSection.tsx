"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import contact from "@/../public/assets/contact/contact.svg";
import contactMap from "@/../public/assets/contact/contactMap.svg";
import { turret } from "@/app/(pages)/page";
const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    setFormData({
        name: "",
        email: "",
        message: "",
      })
  }
  return (
    <section
      id="contact"
      className="flex mx-auto flex-col items-center  w-10/12 gap-10  pb-8 "
    >
      <h2 className={`${turret.className} text-4xl font-extrabold `}>Contact Us</h2>
     <div className="flex justify-center">
     <div className="flex flex-col mr-[-1] py-5 items-center bg-rich-blue-contactBg md:px-24 px-14 rounded-l-[3rem] border-y-2 border-l-2 border-r-2 rounded-r-[3rem] lg:border-r-0 lg:rounded-r-[0rem] border-rich-blue-lightLine">
        <Image src={contact} height={200} className="w-[200px]" alt="" />
        <h3 className={`text-2xl md:text-3xl font-bold ${turret.className}`}>
          Get in touch with us
        </h3>
        <form
          onSubmit={onSubmit}
          className="flex text-[#eeeeee] flex-col gap-1 items-start"
        >
          <label htmlFor="name">Name</label>
          <input
            className="rounded-lg w-[233px] md:w-[288px] px-5 mb-2 py-2 bg-[#343333]"
            type="text"
            id="name"
            placeholder="Rachel Joe"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={formData.name}
          />
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg px-5 w-[233px] md:w-[288px] mb-2 py-2 bg-[#343333]"
            type="email"
            id="email"
            placeholder="Rachel@domain.com"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            value={formData.email}
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="rounded-lg w-[233px] md:w-[288px] px-5 mb-2 py-2 resize-none bg-[#343333]"
            id="message"
            placeholder="Type your query here"
            rows={3}
            cols={18}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            value={formData.message}
          />
          <button type="submit" className=" bg-[#6088EE] py-2 my-2 px-10  flex gap-2 ">
            Send Message
          </button>
        </form>
      </div>

      <Image
        height={650}
        src={contactMap}
        className="rounded-r-[2rem] lg:block border-y-2 border-r-2 border-rich-blue-lightLine hidden"
        alt=""
      />
     </div>
    </section>
  );
};

export default ContactSection;
