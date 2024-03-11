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
      className="flex mx-auto  w-10/12 justify-center py-16 "
    >
     <div className="flex justify-center">
     <div className="flex flex-col mr-[-1] py-5 items-center bg-rich-blue-contactBg px-24 rounded-l-[3rem] border-y-2 border-l-2 border-r-2 rounded-r-[3rem] lg:border-r-0 lg:rounded-r-[0rem] border-rich-blue-lightLine">
        <Image src={contact} height={200} alt="" />
        <h3 className={`text-3xl font-bold ${turret.className}`}>
          Get in touch with us
        </h3>
        <form
          onSubmit={onSubmit}
          className="flex text-[#eeeeee] flex-col gap-2 items-start"
        >
          <label htmlFor="name">Name</label>
          <input
            className="rounded-lg px-5 py-2 bg-[#343333]"
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
            className="rounded-lg px-5 py-2 bg-[#343333]"
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
            className="rounded-lg px-5 py-2 resize-none bg-[#343333]"
            id="message"
            placeholder="Type your query here"
            rows={4}
            cols={23}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            value={formData.message}
          />
          <button type="submit" className="flex gap-2 ">
            Send Message
            <svg
              xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>

      <Image
        height={620}
        src={contactMap}
        className="rounded-r-[2rem] lg:block border-y-2 border-r-2 border-rich-blue-lightLine hidden"
        alt=""
      />
     </div>
    </section>
  );
};

export default ContactSection;
