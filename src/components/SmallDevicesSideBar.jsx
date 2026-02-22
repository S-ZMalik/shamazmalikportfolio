"use client";
import { useWholeContext } from "@/context/WholeContext";
import handleScroll from "@/helpers/handleScroll";
import { Briefcase, Code, House, Mail, Moon, Star, User } from "lucide-react";
import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn";

const SmallDevicesSideBar = () => {
  const [isActive, setIsActive] = useState(1);
  const { isVisibleSideBar, toggleSideBar } = useWholeContext();

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
    <div
      className={`${
        isVisibleSideBar ? "pointer-events-none" : "pointer-events-auto"
      } fixed w-full h-screen transition-all z-20 flex items-center md:hidden`}
    >
      <div
        className={`${
          isVisibleSideBar ? "-translate-x-100" : "translate-x-0"
        } transition-all duration-350 w-[16rem] h-screen relative z-10 shadow-2xl shadow-white/5 `}
      >
        <div className="bg-[var(--SIDEBARBGCOLOR)] w-full h-full sticky left-0 top-0 px-5 py-10">
          <div className="inner_div flex flex-col justify-between  h-full">
            <ul className="flex flex-col gap-5 py-20">
              {listArr.map((list) => (
                <button
                  key={list.id}
                  onClick={() => handleScroll(list.url, toggleSideBar)}
                >
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
                      {list.title}
                    </div>
                  </li>
                </button>
              ))}
            </ul>

            <ThemeBtn />
          </div>
        </div>
      </div>

      <div
        className={`backdrop-blur-lg bg-black/76 w-full h-full absolute left-0 transition-all duration-350 ${
          isVisibleSideBar ? "translate-x-[100%]" : "translate-x-0"
        } `}
        onClick={toggleSideBar}
      ></div>
    </div>
  );
};

export default SmallDevicesSideBar;
