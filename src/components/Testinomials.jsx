"use client";
import React from "react";
import SectionHeadingText from "./SectionHeadingText";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import TestimonialCart from "./TestimonialCart";
import handleScroll from "@/helpers/handleScroll";

const Testinomials = () => {
  const totalTestimonialRating = [
    {
      id: 1,
      total: "10+",
      title: "Happy Clients",
    },
    {
      id: 2,
      total: "25+",
      title: "Project Done",
    },
    {
      id: 3,
      total: "5⭐",
      title: "Average Rating",
    },
    {
      id: 4,
      total: "24/7",
      title: "Support",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[var(--SECTIONBGCOLOR)]/70 to-[var(--SECTIONBGCOLOR))]/5 py-5 px-4 sm:px-5 "
      id="testimonials"
    >
      <div className="flex flex-col gap-2">
        <SectionHeadingText
          sectionHeading={"Client Love"}
          para={
            "Don't just take my word for it. Here's what clients, colleagues, and users have to say about working with me."
          }
          heading={"What People Say"}
        />
        <div className="mx-auto">
          <button
            className="group cursor-pointer bg-[var(--BLUETEXTCOLOR)]/90 rounded-4xl px-5 py-3 text-[1rem] text-white flex items-center gap-1 transition-all hover:bg-[var(--BLUETEXTCOLOR)]/80 hover:scale-104"
            onClick={() => handleScroll("contact")}
          >
            <Plus size={20} />
            Add Your Testimonial
          </button>
        </div>
      </div>

      {/* TESTIMONIAL CONTAINER */}
      <div className="py-2 relative">
        <button className="absolute rounded-[50%] bg-[var(--BACKGROUNDCOLOR)] transition-all text-[var(--WHITETEXT)] right-0 border border-white/10 hover:border-[var(--BLUETEXTCOLOR)]/80 cursor-pointer top-[40%] z-10">
          <ChevronRight size={40} className="p-2" />
        </button>
        <button className="absolute rounded-[50%] bg-[var(--BACKGROUNDCOLOR)] transition-all text-[var(--WHITETEXT)] left-0 border border-white/10 hover:border-[var(--BLUETEXTCOLOR)]/80 cursor-pointer top-[40%] z-10">
          <ChevronLeft size={40} className="p-2" />
        </button>
        <TestimonialCart />

        {/* DOTS SLIDER */}
        <div className="mx-auto py-2 flex justify-center items-center gap-2">
          {[1, 2, 3, 4, 5].map((d) => (
            <span
              key={d}
              className="rounded-full w-3 h-3 bg-[var(--PARATEXT)] transition-all active:w-3.5 active:h-3.5 active:bg-[var(--BLUETEXTCOLOR)]"
            ></span>
          ))}
        </div>

        <button className="flex items-center gap bg-[var(--PARATEXT)]/20 rounded-full px-4 py-1.5  mx-auto">
          Resume Auto-play
        </button>
      </div>

      {/* TOTAL TESTIMONIAL RATING  */}
      <div className="py-4 grid grid-cols-2 gap-3.5  lg:grid-cols-4 lg:gap-5">
        {totalTestimonialRating.map((data) => (
          <div
            className="flex flex-col items-center justify-center"
            key={data.id}
          >
            <h4 className="text-[var(--BLUETEXTCOLOR)] text-3xl font-semibold">
              {data.total}
            </h4>
            <span>{data.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testinomials;
