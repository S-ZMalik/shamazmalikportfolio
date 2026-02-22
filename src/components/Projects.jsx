"use client";
import React, { useState } from "react";
import SectionHeadingText from "./SectionHeadingText";
import { Grid3x3, List } from "lucide-react";
import ProjectCart from "./ProjectCart";
import ProjectListComponent from "./ProjectListComponent";
import { useWholeContext } from "@/context/WholeContext";

const Projects = () => {
  const { isVisibleSideBar } = useWholeContext();
  const projectListArr = [
    { id: 1, title: "All" },
    { id: 2, title: "ReactJs" },
    { id: 3, title: "Tailwind" },
    { id: 4, title: "FullStack" },
    { id: 5, title: "NextJs" },
  ];

  const projects = [
    {
      id: 1,
      bgImg: "",
      projectName: "Knest – AI-Powered Second Brain",
      year: 2025,
      description:
        "An AI-powered productivity tool that serves as your personal 'second brain.' It remembers context, intelligently connects tasks and notes, and helps you manage projects efficiently, ensuring no detail is ever lost.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "+1 more",
      ],
      demoLink: "https://facebook.com",
      category: "ReactJs",
      status: "Active",
    },
    {
      id: 2,
      bgImg: "",
      projectName: "Portfolio Builder Pro",
      year: 2024,
      description:
        "A platform to create beautiful developer portfolios using drag-and-drop components and responsive templates, allowing developers to showcase their work professionally and customize layouts for modern web standards.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoLink: "https://example.com",
      category: "Tailwind",
      status: "Active",
    },
    {
      id: 3,
      bgImg: "",
      projectName: "Task Manager FullStack",
      year: 2023,
      description:
        "FullStack task management application with real-time notifications, collaborative features, and analytics dashboards. Designed for teams to track projects efficiently while providing intuitive UI for managing complex workflows.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoLink: "https://example.com",
      category: "FullStack",
      status: "Completed",
    },
    {
      id: 4,
      bgImg: "",
      projectName: "NextJS Blog Platform",
      year: 2025,
      description:
        "A high-performance blog platform built with NextJS, fully optimized for SEO and fast loading. Includes dynamic routing, server-side rendering, and interactive components for a smooth reading experience on all devices.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      demoLink: "https://example.com",
      category: "NextJs",
      status: "Active",
    },
    {
      id: 5,
      bgImg: "",
      projectName: "E-commerce Dashboard",
      year: 2024,
      description:
        "A responsive e-commerce dashboard for managing products, orders, and analytics. Integrates modern React components and NextJS features to provide real-time data insights, inventory tracking, and sales performance monitoring.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      demoLink: "https://example.com",
      category: "FullStack",
      status: "Active",
    },
    {
      id: 6,
      bgImg: "",
      projectName: "Landing Page UI Kit",
      year: 2023,
      description:
        "A collection of pre-designed landing page components built entirely with Tailwind CSS and React for rapid development. Designed to help developers and designers quickly create modern, responsive, and visually appealing landing pages.",
      technologies: ["React", "Tailwind CSS"],
      demoLink: "https://example.com",
      category: "Tailwind",
      status: "Completed",
    },
  ];

  const [filterProjects, setFilterProjects] = useState([...projects]);

  const [isActive, setIsAcitve] = useState(1);

  const [gridIsActive, setGridIsActive] = useState("grid");

  const filterProjectFunc = (id, category) => {
    const newArr =
      category === "All"
        ? [...projects]
        : projects.filter((data) => data.category === category);

    setIsAcitve(id);
    setFilterProjects(newArr);
  };
  return (
    <section className="py-17 px-4 sm:px-5 " id="projects">
      <SectionHeadingText
        heading={"Projects & Case Studies"}
        sectionHeading={"Featured Work"}
        para={"A showcase of my recent work, from concept to deployment"}
      />

      {/* PROJECTS CARTS */}
      <div className="flex flex-col gap-5 py-15">
        <div
          className={`flex flex-col items-center justify-center md:flex-row md:justify-between  gap-y-3 ${
            isVisibleSideBar ? "z-20" : "z-10"
          }`}
        >
          <ul className="flex items-center flex-wrap justify-center gap-3">
            {projectListArr.map((data) => (
              <li
                key={data.id}
                className={`
                    ${
                      isActive === data.id
                        ? "text-white bg-[var(--BTNBLUECOLOR)]  hover:bg-[var(--BLUETEXTCOLOR)]/90"
                        : "bg-transparent border border-white/10 hover:bg-[var(--PARATEXT)]/20 hover:border-transparent"
                    }
                    text-[var(--WHITETEXT)]
                    cursor-pointer
                    text-[0.9rem]
                    rounded-lg
                    py-1.5
                    px-2.5
                    transition-all 
                  `}
                onClick={() => filterProjectFunc(data.id, data.title)}
              >
                {data.title}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 z-10">
            <button
              className={`${
                gridIsActive === "grid"
                  ? "text-white bg-[var(--BTNBLUECOLOR)] hover:bg-[var(--BLUETEXTCOLOR)]/90"
                  : "bg-transparent border border-[var(--PARATEXT)]/20 hover:bg-[var(--PARATEXT)]/20 hover:border-transparent"
              } text-[var(--WHITETEXT)]  cursor-pointer text-[0.9rem] rounded-lg py-1.5 px-2.5 transition-all `}
              onClick={() => setGridIsActive("grid")}
            >
              <Grid3x3 />
            </button>
            <button
              className={`${
                gridIsActive !== "grid"
                  ? " bg-[var(--BLUETEXTCOLOR)] hover:bg-[var(--BLUETEXTCOLOR)]/90"
                  : "bg-transparent border border-white/10 hover:bg-[var(--PARATEXT)]/20 hover:border-transparent"
              } text-[var(--WHITETEXT)]  cursor-pointer text-[0.9rem] rounded-lg py-1.5 px-2.5 transition-all `}
              onClick={() => setGridIsActive("list")}
            >
              <List />
            </button>
          </div>
        </div>

        {/* container div projects */}
        <>
          {gridIsActive !== "grid" ? (
            <div className="grid col-1 gap-x-0 gap-y-8 py-5 ">
              {filterProjects.map((data) => (
                <ProjectListComponent key={data.id} {...data} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 ">
              {filterProjects.map((data) => (
                <ProjectCart key={data.id} {...data} />
              ))}
            </div>
          )}
        </>
      </div>

      <hr className="border border-[var(--WHITETEXT)]/5" />
    </section>
  );
};

export default Projects;
