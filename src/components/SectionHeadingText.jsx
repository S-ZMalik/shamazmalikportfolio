import { Star } from "lucide-react";
import React from "react";

const SectionHeadingText = ({ sectionHeading, heading, para }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <span className="rounded-3xl px-5 py-2.5 text-[var(--BLUETEXTCOLOR)] bg-[var(--BLUETEXTCOLOR)]/10 flex items-center gap-2 text-sm">
          <Star width={15} /> {sectionHeading}
        </span>
      </div>

      <h2 className="text-3xl lg:text-4xl text-[var(--WHITETEXT)] font-semibold text-center">
        {heading}
      </h2>

      <p className="text-[1.2rem] sm:text-[1.3rem] text-center lg:w-[78%] md:px-8">
        {para}
      </p>
    </div>
  );
};

export default SectionHeadingText;
