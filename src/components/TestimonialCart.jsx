import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const TestimonialCart = () => {
  return (
    <div className="flex flex-wrap  md:flex-nowrap items-center justify-center lgs:mx-13 my-2 gap-8  px-4 lg:px-6 py-6 rounded-xl transition-all border-2 border-[var(--BLUETEXTCOLOR)]/10 bg-[var(--BACKGROUNDCOLOR)] hover:border-[var(--BLUETEXTCOLOR)]/20">
      {/* img */}
      <div className="relative w-22 h-22 shrink-0">
        <Image
          src={"/project1.jfif"}
          fill
          className="rounded-[50%] border-3 border-[var(--BLUETEXTCOLOR)]/50 w-[10rem]"
          alt="this is imag"
        />
      </div>

      {/* CONTENT */}
      <div className="flex justify-center items-center md:items-start flex-col gap-2">
        <Quote className="text-[var(--BLUETEXTCOLOR)]" />
        <h5 className="text-[var(--WHITETEXT)] text-lg  text-center md:text-left px-4 md:px-0">
          "Worked with this developer on a React application. The code quality
          is outstanding and the attention to detail is impressive. Project was
          completed ahead of schedule with great communication throughout."
        </h5>

        <div className="flex items-center text-xl">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        <div className="flex flex-col text-sm items-center md:items-start">
          <h6 className="text-[var(--WHITETEXT)] font-semibold text-[1rem] text-nowrap">
            Priya Sharma
          </h6>
          <span>Client</span>
          <span>Oct 2025</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
