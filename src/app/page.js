import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InterestedWorking from "@/components/InterestedWorking";
import MenuBtn from "@/components/MenuBtn";
import Projects from "@/components/Projects";
import Testinomials from "@/components/Testinomials";
import { Menu } from "lucide-react";

const page = () => {
  return (
    <main className=" w-full  px-4">
      {/* MENU BUTTON */}
      <MenuBtn />

      {/*======== HERO========== */}
      <Hero />

      <div className="bg-gradient-to-b from-[var(--SECTIONBGCOLOR)]/70 to-[var(--SECTIONBGCOLOR))]/5">
        {/* ==============ABOUT ========= */}
        <About />

        {/* FEATURED & PROJECTS SECTION */}
        <Projects />

        {/*  INTERESTED IN WORKIND TOGETHER  */}
        <InterestedWorking />

        {/* EXPERIENCE SECTION */}
        <Experience />
      </div>

      {/* TESTIMONIALS */}
      <Testinomials />

      {/* CONTACT FORM */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default page;
