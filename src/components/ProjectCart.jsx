import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCart = ({
  id,
  bgImg,
  projectName,
  year,
  description,
  technologies,
  demoLink,
  category,
  status,
}) => {
  return (
    <div className="group flex flex-col  border  border-white/5 transition-all duration-300 rounded-xl overflow-hidden shadow-2xl shadow-[var(--BLUETEXTCOLOR)]  bg-[var(--BACKGROUNDCOLOR)] shadow-[0px_5px_15px_rgba(255,255,255,0.3)] hover:shadow-2xs hover:border-[var(--BLUETEXTCOLOR)]/20 hover:-translate-y-2">
      <div className="relative overflow-hidden w-full h-[12rem]">
        <Image
          src={"/project1.jfif"}
          alt={"text"}
          fill
          className={
            " object-cover transition-all duration-300 group-hover:scale-105"
          }
        />

        <a
          href={demoLink}
          className="absolute right-3 top-3 bg-[var(--SIDEBARBGCOLOR)]/90 p-1.5 rounded-lg text-[var(--WHITETEXT)] transition-all duration-200 cursor-pointer invisible group-hover:visible"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="flex flex-col justify-between gap-4 p-5 grow-1">
        <div className="flex items-start justify-between">
          <h4 className="text-[var(--WHITETEXT)] font-semibold text-xl transition-all duration-300 group-hover:text-[var(--BLUETEXTCOLOR)]">
            {projectName}
          </h4>
          <span className="flex items-center gap bg-[var(--PARATEXT)]/20 rounded-2xl px-2.5 py-1 text-[0.8rem]">
            <Calendar size={15} />
            &nbsp;{year}
          </span>
        </div>

        <p className="text-[0.9rem]">{description.slice(0, 112)}...</p>

        <div className="flex items-center gap-x-3 gap-y-2 flex-wrap">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-3xl px-2.5 py-0.5 text-[var(--BLUETEXTCOLOR)] bg-[var(--BLUETEXTCOLOR)]/10 flex items-center text-[0.8rem]"
            >
              {tech}
            </span>
          ))}
          <span className="rounded-3xl px-2.5 py-0.5 bg-[var(--PARATEXT)]/20  flex items-center text-[0.8rem]">
            +1 more
          </span>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={demoLink}
            className="bg-[var(--BTNBLUECOLOR)] flex items-center gap-3 text-white rounded-xl px-3 py-2 text-[0.9rem] cursor-pointer shrink-0"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>

          <span className="flex items-center gap-2">
            <span className="size-3 rounded-full dim-pulse"></span> {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
