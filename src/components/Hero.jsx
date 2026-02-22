import { Linkedin, Mail, MoveRight, Sparkles } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen  bg-gradient-to-b from-[var(--SECTIONBGCOLOR)]/5 to-[var(--SECTIONBGCOLOR))]/20 px-4 md:px-5 lg:px-6 xl:px-15 flex items-center "
      id="home"
    >
      <div className="h-full ">
        <div className="flex flex-col gap-8">
          <div className="">
            <span className="inline-block bg-[var(--OPPORTUNITYBGCOLOR)] text-[var(--OPPORTUNITYTEXTCOLOR)] rounded-4xl px-5 py-3 border border-[var(--BLUETEXTCOLOR)]">
              <span className="flex items-center gap-2">
                {" "}
                <Sparkles /> Available for opportunities
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[var(--WHITETEXT)] font-semibold whitespace-nowrap text-4xl md:text-5xl  lg:text-6xl">
              Shamaz Malik
            </h1>
            <h2 className=" font-semibold text-[var(--BLUETEXTCOLOR)] text-4xl lg:text-5xl xl:text-6xl">
              Giving shape to founders' digital dreams.
            </h2>
            <p className="text-xl lg:text-2xl text-[var(--PARATEXT)]">
              Full-stack developer and UI/UX designer building modern, scalable
              applications with exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-center md:flex-row">
            <button className="group cursor-pointer bg-[var(--BTNBLUECOLOR)] rounded-lg px-8 py-3 text-xl text-white flex items-end justify-center gap-2 ">
              View My Work{" "}
              <MoveRight className="group-hover:translate-x-1 transition-all" />
            </button>
            <button className="cursor-pointer bg-transparent border border-[var(--WHITETEXT)] rounded-lg px-8 py-3 text-xl transition-all text-[var(--WHITETEXT)]/90 hover:bg-[var(--PARATEXT)]/20">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-10 text-[var(--WHITETEXT)]">
          Connect with me: &nbsp;
          <a
            href="https://www.linkedin.com/in/muhammad-shamaz-989421274/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-[var(--PARATEXT)]/20 p-3 rounded-lg"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:shamazmalik963@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Muhammad,%0A%0AI%20want%20to%20discuss%20a%20project."
            // target="_blank"
            className="bg-[var(--PARATEXT)]/20 p-3 rounded-lg"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
