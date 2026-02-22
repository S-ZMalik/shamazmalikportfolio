"use client";
import React, { useState } from "react";
import SectionHeadingText from "./SectionHeadingText";
import {
  CheckCheck,
  CircleCheckBig,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  TriangleAlert,
} from "lucide-react";
import handleFormData from "@/helpers/contact";

const ContactForm = () => {
  const contactData = [
    {
      id: 1,
      icon: Mail,
      type: "Email",
      value: "shamazmalik963@gmail.com",
      status: "Send me an email anytime",
    },
    {
      id: 2,
      icon: Phone,
      type: "Phone",
      value: "+923340321939",
      status: "Available for calls",
    },
    {
      id: 3,
      icon: MapPin,
      type: "Location",
      value: "Karachi, Pakistan",
      status: "Open to remote opportunities",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <section
      className={
        "bg-gradient-to-b from-[var(--SECTIONBGCOLOR)]/5 via-[var(--SECTIONBGCOLOR)]/40 to-[var(--SECTIONBGCOLOR)]/5"
      }
      id="contact"
    >
      <div className="py-8">
        <SectionHeadingText
          sectionHeading={"Get In Touch"}
          para={
            "Ready to bring your ideas to life? I'm here to help you build something amazing."
          }
          heading={"Let's Work Together"}
        />

        {/* CONTACT FORM AREA */}
        <div className="grid grid-1 lg:grid-cols-3 items-start gap-12 px-2 sm:px-4 py-10">
          {/* left area */}
          <div className="flex flex-col gap-5">
            <h5 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
              Contact Information
            </h5>
            {/* INFOR CART */}
            {contactData.map((data) => {
              const Icon = data.icon;
              return (
                <div
                  key={data.id}
                  className=" border border-white/10 rounded-xl transition-all cursor-pointer hover:bg-[var(--PARATEXT)]/10 hover:border-[var(--BLUETEXTCOLOR)]/20"
                >
                  <div className="p-4 flex items-start gap-4">
                    <span className="bg-[var(--BLUETEXTCOLOR)]/20 rounded-xl text-[var(--BLUETEXTCOLOR)]">
                      <Icon size={40} className="p-2" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <h6 className="text-[var(--WHITETEXT)]">{data.type}</h6>

                      <span className="text-sm">{data.value}</span>
                      <small>{data.status}</small>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CONTACT ME FOLLOW LINKS
             */}
            <div className="flex flex-col gap-5">
              <h6 className="font-semibold text-[var(--WHITETEXT)] text-xl ">
                Follow Me
              </h6>

              <div className="flex items-center gap-4">
                <a
                  className="rounded-xl border border-[var(--PARATEXT)]/20 bg-[var(--BACKGROUNDCOLOR)] transition-all hover:border-[var(--BLUETEXTCOLOR)]/20 hover:text-[var(--BLUETEXTCOLOR)] hover:-translate-y-1 cursor-pointer"
                  href="https://github.com/S-ZMalik"
                  target="_blank"
                >
                  <Github size={45} className="p-2.5" />
                </a>
                <a
                  className="rounded-xl border border-[var(--PARATEXT)]/20 bg-[var(--BACKGROUNDCOLOR)] transition-all hover:border-[var(--BLUETEXTCOLOR)]/20 hover:text-[var(--BLUETEXTCOLOR)] hover:-translate-y-1 cursor-pointer "
                  href="https://www.linkedin.com/in/muhammad-shamaz-989421274/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin size={45} className="p-2.5" />
                </a>
              </div>

              <div className="bg-[var(--BLUETEXTCOLOR)]/5 rounded-xl border-[var(--BLUETEXTCOLOR)]/20 border">
                <div className="p-5 flex flex-col gap-4">
                  <h6>
                    <span className="size-3 rounded-full dim-pulse"></span>
                    <span className="text-[var(--BLUETEXTCOLOR)]">
                      Available for work
                    </span>
                  </h6>
                  <p className="text-sm">
                    I'm currently accepting new projects and would love to hear
                    about yours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT AREA || FORM AREA */}
          <form
            onSubmit={(e) =>
              handleFormData(e, setSuccessMessage, setErrorMessage, setLoading)
            }
            className="border border-white/10 bg-[var(--BACKGROUNDCOLOR)]  rounded-xl lg:col-span-2"
          >
            {/* INNER DIV */}
            <div className="p-5">
              <h5 className="text-[var(--WHITETEXT)] font-semibold text-2xl">
                Send me a message
              </h5>

              {/* FORM ELEMENTS */}
              <div className="flex flex-col gap-5 py-6">
                {/* FORM TOP ELEMENTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* INPUT ELEMENT | Full name */}
                  <div className="flex flex-col gap-2 text-[1rem] text-[var(--WHITETEXT)]">
                    <label htmlFor="username" className="">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Your full name"
                      className="border border-[var(--PARATEXT)]/20 rounded-xl px-3 py-2 transition-all outline-0 focus:border-[var(--BLUETEXTCOLOR)]"
                    />
                  </div>

                  {/* INPUT ELEMENT | EMAIL ADDRESS */}
                  <div className="flex flex-col gap-2 text-[1rem] text-[var(--WHITETEXT)]">
                    <label htmlFor="email" className="">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className=" border border-[var(--PARATEXT)]/20 rounded-xl px-3 py-2 transition-all outline-0 focus:border-[var(--BLUETEXTCOLOR)]"
                    />
                  </div>
                </div>

                {/* INPUT ELEMENT | SUBJECT */}
                <div className="flex flex-col gap-2 text-[1rem] text-[var(--WHITETEXT)]">
                  <label htmlFor="subject" className="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="border border-[var(--PARATEXT)]/20 rounded-xl px-3 py-2 transition-all outline-0 focus:border-[var(--BLUETEXTCOLOR)]"
                  />
                </div>

                {/* INPUT ELEMENT | TEXT AREA | MESSAGE*/}
                <div className="flex flex-col gap-2 text-[1rem] text-[var(--WHITETEXT)]">
                  <label htmlFor="message" className="">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, ideas or just say hello..."
                    className="border border-[var(--PARATEXT)]/20 rounded-xl px-3 py-2 transition-all outline-0 resize-none focus:border-[var(--BLUETEXTCOLOR)]"
                  />
                </div>

                {/* BUTTON FORM */}
                <button className="rounded-xl bg-[var(--BTNBLUECOLOR)] text-[var(--WHITETEXT)] text-[1rem] flex items-center justify-center py-3 gap-3 transition-all cursor-pointer hover:bg-[var(--BTNBLUECOLOR)]/80">
                  {loading && <LoaderCircle className="animate-spin" />}{" "}
                  <Send size={20} /> Send Message
                </button>
              </div>

              {successMessage && (
                <p className="rounded-xl bg-[var(--GREENCOLOR)]/50 text-[var(--WHITETEXT)] py-3 text-[1rem] px-4 flex items-center gap-3 transition-all">
                  <CheckCheck /> Message Send successfully
                </p>
              )}

              {errorMessage && (
                <p className="rounded-xl bg-red-500/50 text-[var(--WHITETEXT)] py-3 text-[1rem] px-4 flex items-center gap-3 transition-all">
                  <TriangleAlert /> {errorMessage}
                </p>
              )}

              <hr className="outline-0 border-[var(--PARATEXT)]/20" />

              <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 pt-7 pb-2">
                <p className="flex items-center gap-2 text-sm ">
                  <CircleCheckBig
                    className="text-[var(--GREENCOLOR)]"
                    size={20}
                  />
                  Usually responds within 24 hours
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <CircleCheckBig
                    className="text-[var(--GREENCOLOR)]"
                    size={20}
                  />
                  Free consultation available
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
