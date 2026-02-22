"use client";
import handleScroll from "@/helpers/handleScroll";
import { ChevronUp, Github, Linkedin, Mail, Send } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr className="outline-0 border-[var(--PARATEXT)]/20" />
      <div className="">
        <div className="flex flex-col gap-5 px-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* left */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 ">
              <div className="flex flex-col gap-4">
                <h6 className="font-semibold text-[var(--BLUETEXTCOLOR)] text-xl whitespace-nowrap">
                  Shamaz Malik
                </h6>
                <p>
                  Passionate full-stack developer creating innovative solutions
                  and exceptional digital experiences with modern technologies.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/S-ZMalik"
                    target="_blank"
                    className="hover:text-[var(--BLUETEXTCOLOR)] hover:scale-110 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-shamaz-989421274/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-[var(--BLUETEXTCOLOR)] hover:scale-110 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://t.me/shamaz_malik"
                    target="_blank"
                    className="hover:text-[var(--BLUETEXTCOLOR)] hover:scale-110 transition-all"
                  >
                    <Send size={20} />
                  </a>
                  <a
                    href="mailto:shamazmalik963@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Muhammad,%0A%0AI%20want%20to%20discuss%20a%20project."
                    className="hover:text-[var(--BLUETEXTCOLOR)] hover:scale-110 transition-all"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* links */}
              <div className="flex flex-col gap-4 md:justify-self-end">
                <h6 className="font-semibold text-[var(--BLUETEXTCOLOR)] text-xl whitespace-nowrap">
                  Quick Links
                </h6>
                <ul className="flex flex-col gap-2">
                  <li
                    className="cursor-pointer"
                    onClick={() => handleScroll("about")}
                  >
                    About
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handleScroll("project")}
                  >
                    Project
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handleScroll("experience")}
                  >
                    Experience
                  </li>
                  <li
                    className="cursor-pointer"
                    onClick={() => handleScroll("contact")}
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>

            {/* right */}
            <div className="flex md:justify-center">
              <div className="flex flex-col items-start gap-4 ">
                <h6 className="font-semibold text-[var(--BLUETEXTCOLOR)] text-xl whitespace-nowrap text-left">
                  Services
                </h6>
                <ul className="flex flex-col gap-2">
                  <li>Web Development</li>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Mern Stack Development</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="outline-0 border-[var(--PARATEXT)]/20" />

          {/* bottom div */}
          <div className="flex flex-wrap items-center justify-center text-center gap-y-3 pt-2 md:flex-row">
            <p className="text-nowrap px-2 max-[360px]:text-wrap">
              {" "}
              © 2026 Ajay Pawar · Made with ❤ in Pakistan
            </p>

            <button
              className="flex items-center gap-2 text-[var(--WHITETEXT)] border border-[var(--PARATEXT)]/20 rounded-xl px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-[var(--BLUETEXTCOLOR)] hover:-translate-y-1.5"
              onClick={() => handleScroll("home")}
            >
              Back to top <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
