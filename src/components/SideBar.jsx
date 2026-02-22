"use client";
import handleScroll from "@/helpers/handleScroll";
import { Briefcase, Code, House, Mail, Moon, Star, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn";

const SideBar = () => {
  const [isActive, setIsActive] = useState(1);

  const listArr = [
    { id: 1, title: "Home", icon: <House size={18} />, url: "home" },
    { id: 2, title: "About", icon: <User size={18} />, url: "about" },
    { id: 3, title: "Projects", icon: <Code size={18} />, url: "projects" },
    {
      id: 4,
      title: "Experience",
      icon: <Briefcase size={18} />,
      url: "experience",
    },
    {
      id: 5,
      title: "Testimonials",
      icon: <Star size={18} />,
      url: "testimonials",
    },
    { id: 6, title: "Contact", icon: <Mail size={18} />, url: "contact" },
  ];

  return (
    <div className="will-change-contents xl:w-[16rem] h-screen relative hidden md:block sticky top-0 border-r border-[var(--WHITETEXT)]/10">
      <div className="bg-[var(--SIDEBARBGCOLOR)] w-full h-full sticky left-0 top-0 px-5 py-10">
        <div className="inner_div flex flex-col justify-between  h-full">
          {/* LOGO AND ICONS */}
          <div className="flex flex-col gap-10">
            <h3 className="text-[var(--WHITETEXT)] text-xl font-bold text-center xl:text-start hidden lg:block">
              <span className="hidden xl:inline-block">Shamaz Malik</span>
              <span className="inline-block xl:hidden text-center">SM</span>
            </h3>

            <ul className="flex flex-col gap-2">
              {listArr.map((list) => (
                <button key={list.id} onClick={() => handleScroll(list.url)}>
                  <li
                    onClick={() => setIsActive(list.id)}
                    className={`group rounded-xl px-2 py-3 cursor-pointer transition-all border text-[var(--WHITETEXT)]/80 ${
                      isActive === list.id
                        ? "bg-[var(--ACTIVELISTBGCOLOR)] border-[var(--lISTBORDERCOLOR)] text-[var(--WHITETEXT)]"
                        : "border-transparent hover:bg-[var(--lISTHOVERCOLOR)]"
                    }`}
                  >
                    <div className="flex items-center gap-5 group-hover:translate-x-1 transition-all">
                      {list.icon}
                      <span className="hidden xl:inline-block">
                        {list.title}
                      </span>
                    </div>
                  </li>
                </button>
              ))}
            </ul>
          </div>

          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
