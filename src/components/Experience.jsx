import React from "react";
import SectionHeadingText from "./SectionHeadingText";
import ExperienceCart from "./ExperienceCart";
import { Hospital } from "lucide-react";

const Experience = () => {
  const experienceArr = [
    {
      id: 1,
      designation: "Frontend Developer",
      companyName: "TechNova Solutions",
      location: "Lahore, Pakistan",
      description:
        "Developed scalable and high-performance web applications focused on modern UI/UX standards and optimized rendering strategies.",
      acheivements: [
        "Built a reusable component library using React and Tailwind; reduced development time for new features by 35%",
        "Implemented code-splitting and lazy loading; improved Lighthouse performance score from 68 to 92",
        "Refactored legacy jQuery modules into React architecture; reduced bundle size by 28%",
        "Integrated REST APIs with proper error boundaries and state handling; reduced frontend crash reports by 40%",
        "Collaborated with backend team to standardize API response formats, improving debugging efficiency",
        "Introduced ESLint and Prettier enforcement; improved code consistency across team",
      ],
      technologies: [
        "ReactJs",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
      ],
      status: "Completed",
      date: "01/2024",
      jobType: "Full time",
    },
    {
      id: 2,
      designation: "Full Stack Developer",
      companyName: "CodeCrafters Lab",
      location: "Islamabad, Pakistan",
      description:
        "Worked on full-stack SaaS applications with authentication systems, dashboards, and real-time data management.",
      acheivements: [
        "Designed and developed a multi-tenant dashboard using MERN stack; handled 5k+ monthly active users",
        "Implemented JWT authentication with refresh token rotation; reduced session hijacking risks",
        "Optimized MongoDB queries using indexing and aggregation pipelines; reduced response time by 55%",
        "Deployed production apps using Docker and CI/CD workflows; reduced deployment errors by 70%",
        "Integrated Stripe payment gateway for subscription handling",
        "Built role-based access control for enterprise-level clients",
      ],
      technologies: [
        "ReactJs",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Stripe",
      ],
      status: "Completed",
      date: "06/2023",
      jobType: "Contract",
    },
    {
      id: 3,
      designation: "Next.js Developer",
      companyName: "PixelForge Studio",
      location: "Remote",
      description:
        "Focused on SEO-optimized and server-rendered applications using Next.js with performance-first architecture.",
      acheivements: [
        "Migrated SPA to Next.js with SSR and SSG; improved organic traffic by 48% in 3 months",
        "Implemented dynamic routing and metadata generation; improved search engine indexing",
        "Reduced CLS and LCP issues using optimized image loading and font strategies",
        "Integrated CMS (Sanity) with ISR for real-time content updates",
        "Configured Vercel deployment pipelines with environment separation",
        "Improved Core Web Vitals scores into green zone across all pages",
      ],
      technologies: [
        "Next.js",
        "ReactJs",
        "Tailwind CSS",
        "Sanity CMS",
        "Vercel",
      ],
      status: "Completed",
      date: "10/2023",
      jobType: "Part time",
    },
    {
      id: 4,
      designation: "Junior Software Engineer",
      companyName: "BinaryNest Technologies",
      location: "Karachi, Pakistan",
      description:
        "Contributed to backend services, REST API development, and database management for enterprise clients.",
      acheivements: [
        "Developed secure REST APIs with Express and MongoDB; supported 10k+ records processing daily",
        "Implemented centralized logging and monitoring using Winston; reduced debugging time by 30%",
        "Built an internal admin panel with role-based permissions",
        "Improved database performance using compound indexes and query optimization",
        "Collaborated in Agile sprints with JIRA and Git workflows",
        "Wrote unit tests using Jest, increasing code coverage to 75%",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Jest", "Git"],
      status: "Completed",
      date: "02/2023",
      jobType: "Full time",
    },
  ];

  return (
    <section className="mt-4 pt-12 pb-4 px-4 sm:px-5" id="experience">
      <SectionHeadingText
        sectionHeading={"Career Journey"}
        para={"A timeline of my growth and contributions in the tech industry"}
        heading={"Professional Experience"}
      />

      <div className="py-8 ">
        {experienceArr.map((data) => (
          <div
            className="group flex items-start gap-2 sm:gap-4 md:gap-6 py-4"
            key={data.id}
          >
            {/* LINE DIV */}
            <div className="line_div relative flex flex-col items-center justify-center self-stretch relative">
              {/* ICON */}
              <span className="absolute top-4 rounded-full text-[var(--BLUETEXTCOLOR)] z-1 bg-[var(--BLUETEXTCOLOR)]/10 transition-all  group-hover:bg-[var(--BLUETEXTCOLOR)]/20 group-hover:scale-110">
                <Hospital size={40} className=" p-2 " />
              </span>
              {/* CIRCLE */}
              <span
                className="relative block w-10 h-40 transition-all z-1
  after:content-['']
  after:absolute
  after:left-1/2
  after:top-1/2
  after:-translate-x-1/2
  after:-translate-y-1/2
  after:w-5
  after:h-5
  after:bg-[#6d28d9]
  after:rounded-full group-hover:after:scale-110"
              />

              {/* LINE */}
              <span
                className="absolute  w-[0.1rem] rounded-lg h-[85%] bottom-0  
bg-gradient-to-b 
from-[#4c1d95] 
to-[#4c1d95]/20"
              ></span>
            </div>

            {/* EXPERIENCE CART */}
            <ExperienceCart {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
