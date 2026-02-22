"use client";
import handleScroll from "@/helpers/handleScroll";
import React from "react";

const InterestedWorking = () => {
  return (
    <div className="flex flex-col text-center">
      <h4 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
        Interested in working together?
      </h4>
      <p className="my-3">
        Let's discuss your project and create something amazing together.
      </p>

      <div>
        <button
          className="group cursor-pointer bg-[var(--BLUETEXTCOLOR)] rounded-lg px-6 py-2.5 text-white flex items-end gap-2 inline-block"
          onClick={() => handleScroll("contact")}
        >
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default InterestedWorking;
