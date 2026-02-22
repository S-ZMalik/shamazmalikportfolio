import {
  ArrowRight,
  Calendar,
  Hospital,
  MapPin,
  MoveRight,
  Trophy,
} from "lucide-react";
import React from "react";

const ExperienceCart = ({
  id,
  designation,
  companyName,
  location,
  description,
  acheivements,
  technologies,
  status,
  date,
  jobType,
}) => {
  return (
    <div className="border border-[var(--PARATEXT)]/15 rounded-xl px-5.5 py-5.5 flex-1  bg-[var(--BACKGROUNDCOLOR)] transition-all hover:border-[var(--BLUETEXTCOLOR)]/20 shrink-1">
      {/* inner div */}
      <div className="flex flex-col gap-3 ">
        {/* COMPANY NAME DIV */}
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-[var(--WHITETEXT)] font-semibold text-xl transition-all group-hover:text-[var(--BLUETEXTCOLOR)]">
              {designation}
            </h4>
            <div className="flex items-center flex-wrap sm:flex-wrap gap-x-3 gap-y-1">
              <span className="flex items-center gap-2">
                <Hospital /> {companyName}
              </span>
              <span className="flex items-center gap-2">
                <MapPin />
                {location}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 gap-y-1.5 md:items-end w-full md:w-auto">
            <span className="rounded-3xl px-2.5 py-0.5 text-[var(--BLUETEXTCOLOR)] bg-[var(--BLUETEXTCOLOR)]/10 flex items-center gap-1.5 text-sm">
              <Calendar width={15} /> {date}&ndash;{status}
            </span>
            <span className="bg-[var(--PARATEXT)]/20 rounded-2xl px-2.5 py-0.5 text-[0.8rem] ">
              {jobType}
            </span>
          </div>
        </div>

        {/* <div className="flex flex-col gap-1"> */}
        {/* HEADING */}
        {/* <div className="flex items-center justify-between">
            <h4 className="text-[var(--WHITETEXT)] font-semibold text-xl transition-all group-hover:text-[var(--BLUETEXTCOLOR)]">
              {designation}
            </h4>
            <span className="rounded-3xl px-2.5 py-0.5 text-[var(--BLUETEXTCOLOR)] bg-[var(--BLUETEXTCOLOR)]/10 flex items-center gap-1.5 text-sm">
              <Calendar width={15} /> {date}&ndash;{status}
            </span>
          </div> */}

        {/* LOCATION */}
        {/* <div className="flex items-center justify-between"> */}
        {/* left */}
        {/* <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <Hospital /> {companyName}
              </span>
              <span className="flex items-center gap-2">
                <MapPin />
                {location}
              </span>
            </div> */}

        {/* right */}
        {/* <span className="flex items-center gap bg-[var(--PARATEXT)]/20 rounded-2xl px-2.5 py-1 text-[0.8rem]">
              {jobType}
            </span>
          </div> 
        </div> */}

        {/* company work */}
        <p className="">{description}</p>

        {/* Achievements list */}
        <div className="flex flex-col gap-2">
          <h5 className="flex items-center gap-2">
            <Trophy size={20} className="text-[var(--BLUETEXTCOLOR)]" />
            <span className="font-semibold text-[var(--WHITETEXT)]">
              Key Achievements
            </span>
          </h5>

          <ul className="flex flex-col">
            {acheivements.map((item, i) => (
              <li className="flex items-center gap-2 text-sm leading-5" key={i}>
                <ArrowRight
                  // size={15}
                  className="mt-1 w-[1em] h-[1em] shrink-0  text-[var(--BLUETEXTCOLOR)]"
                />
                {item}
              </li>
            ))}
          </ul>

          {/* technologies */}
          <div className="flex items-center gap-x-3 gap-y-2 flex-wrap">
            {technologies.map((item, i) => (
              <span
                key={i}
                className="rounded-3xl px-2.5 py-0.5 text-[var(--BLUETEXTCOLOR)] bg-[var(--BLUETEXTCOLOR)]/10 flex items-center text-[0.8rem]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCart;
