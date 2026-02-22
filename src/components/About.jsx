import {
  CircleCheck,
  Code,
  Cpu,
  FileUser,
  FolderKanban,
  Server,
  ShieldCheck,
  Star,
} from "lucide-react";
import React from "react";
import SectionHeadingText from "./SectionHeadingText";

const About = () => {
  const skillsArr = [
    {
      id: 7,
      name: "Html5",
      progress: "90%",
      techonology: "Frontend",
    },
    {
      id: 8,
      name: "CSS3",
      progress: "85%",
      techonology: "Frontend",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      progress: "85%",
      techonology: "Frontend",
    },
    {
      id: 1,
      name: "JavaScript",
      progress: "95%",
      techonology: "Frontend",
    },
    {
      id: 2,
      name: "React.js",
      progress: "90%",
      techonology: "Frontend",
    },
    {
      id: 3,
      name: "Node.js",
      progress: "85%",
      techonology: "Backend",
    },
    {
      id: 4,
      name: "Express.js",
      progress: "85%",
      techonology: "Backend",
    },
    {
      id: 5,
      name: "MongoDB",
      progress: "80%",
      techonology: "Database",
    },
    {
      id: 6,
      name: "Next.js",
      progress: "80%",
      techonology: "Full Stack",
    },
  ];

  const bringArr = [
    { id: 1, title: "Frontend development" },
    { id: 2, title: "Responsive design" },
    { id: 3, title: "Modern UI/UX design principles" },
    { id: 4, title: "Backend development" },
    { id: 5, title: "Full Stack development" },
    { id: 6, title: "Performance optimization" },
    { id: 7, title: "Team collaboration & mentoring" },
  ];

  const acheivementsArr = [
    {
      id: 1,
      value: "10+",
      label: "Projects Completed",
      icon: FolderKanban,
    },
    {
      id: 2,
      value: "10+",
      label: "Technologies Mastered",
      icon: Cpu,
    },
    {
      id: 3,
      value: "5+",
      label: "Full-Stack Applications Deployed",
      icon: FileUser,
    },
    {
      id: 4,
      value: "5+",
      label: "Production APIs Built",
      icon: Server,
    },
  ];

  return (
    <section className="mt-4 py-17 px-4 sm:px-5" id="about">
      {/* ABOUT HEADIND AREA */}
      <SectionHeadingText
        sectionHeading={"About Me"}
        heading={"Building Digital Solutions"}
        para={
          "Passionate about creating exceptional user experiences through clean code and thoughtful design"
        }
      />

      {/* ABOUT DETAIL AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 py-18">
        {/* COL 1 */}
        <div>
          <h4 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
            My Journey
          </h4>
          <hr className="w-15 outline-0 border-2 border-[var(--BLUETEXTCOLOR)] rounded-lg mt-3 mb-5" />
          <p className="text-lg">
            Assalam Waalikum, I am Shamaz Malik, a Full-Stack JavaScript
            Developer with strong expertise in modern web technologies including
            HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, Next.js, and
            Express.js.
            <br />
            <br /> I focus on building responsive, scalable, and
            performance-driven web applications with clean architecture and
            maintainable code. My approach combines strong frontend design
            principles with structured backend development to create seamless
            user experiences and efficient systems. <br />
            <br /> I am committed to continuous learning and staying aligned
            with modern development standards. I believe in writing purposeful
            code, solving real problems, and constantly pushing my technical
            limits to grow as a developer.
            <br />
            <br /> I am open to professional opportunities, collaborations, and
            challenging projects where I can contribute, learn, and deliver
            meaningful results.
          </p>

          {/* bring arr */}
          <div className="flex flex-col gap-5 mt-8">
            <h3 className="text-[var(--WHITETEXT)] font-semibold text-xl">
              What I Bring
            </h3>

            <ul className="flex flex-col gap-2">
              {bringArr.map((data) => (
                <li key={data.id} className="flex items-center gap-2">
                  <CircleCheck className="text-[var(--BLUETEXTCOLOR)]" />
                  <span>{data.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COL 2 */}
        <div>
          <div>
            <h4 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
              Skills & Technologies
            </h4>
            <hr className="w-15 outline-0 border-2 border-[var(--BLUETEXTCOLOR)] rounded-lg mt-3 mb-5" />
            <span></span>
          </div>

          <ul className="flex flex-col gap-3">
            {skillsArr.map((data) => (
              <li
                key={data.id}
                className="group bg-[var(--BACKGROUNDCOLOR)] border  rounded-lg p-4 transition-all  border-white/5 hover:border-[var(--BLUETEXTCOLOR)]/20 hover:-translate-y-[0.2rem]"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Code
                        size={28}
                        className="bg-[var(--BLUETEXTCOLOR)]/10 text-[var(--BLUETEXTCOLOR)] rounded-[40%] p-1.5 transition-all group-hover:bg-[var(--BLUETEXTCOLOR)]/20"
                      />
                      <div className="flex flex-col ">
                        <h5 className="text-[var(--WHITETEXT)] font-semibold transition-all group-hover:text-[var(--BLUETEXTCOLOR)]">
                          {data.name}
                        </h5>
                        <p className="text-xs">{data.techonology}</p>
                      </div>
                    </div>
                    <p className="text-[var(--BLUETEXTCOLOR)]/80 text-sm group-hover:text-[var(--BLUETEXTCOLOR)] transition-all">
                      {data.progress}
                    </p>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="bg-[var(--BLUETEXTCOLOR)]/10 w-full h-2 rounded-lg overflow-hidden">
                    <div
                      className={`h-full bg-[var(--BLUETEXTCOLOR)]`}
                      style={{ width: data.progress }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ACHIEVEMENT STATS AREA */}
      <div className="grid grid-cols-2 gap-3.5  lg:grid-cols-4 lg:gap-5">
        {/* single card */}
        {acheivementsArr.map((data) => {
          const Icon = data.icon;

          return (
            <div
              className="group border-white/5 rounded-lg border transition-all duration-300 border-white/5 hover:border-[var(--BLUETEXTCOLOR)]/20  hover:-translate-y-1.5"
              key={data.id}
            >
              <div className="flex flex-col gap-4 items-center justify-center p-4 text-center">
                <Icon
                  size={47}
                  className="bg-[var(--BLUETEXTCOLOR)]/10 rounded-lg text-[var(--BLUETEXTCOLOR)] p-2 transition-all  group-hover:bg-[var(--BLUETEXTCOLOR)]/20"
                />

                <div className="flex flex-col gap-1">
                  <h4 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
                    {data.value}
                  </h4>
                  <p>{data.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
