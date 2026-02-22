"use client";
import { useWholeContext } from "@/context/WholeContext";
import { Menu, X } from "lucide-react";
import React from "react";

const MenuBtn = () => {
  const { isVisibleSideBar, toggleSideBar } = useWholeContext();

  return (
    <span className="fixed right-5 top-5 md:hidden z-20  rounded-full bg-[var(--SIDEBARBGCOLOR)] p-2 border border-[var(--PARATEXT)]/20  duration-300">
      {isVisibleSideBar ? (
        <Menu className=" " onClick={toggleSideBar} />
      ) : (
        <X className="" onClick={toggleSideBar} />
      )}
    </span>
  );
};

export default MenuBtn;
