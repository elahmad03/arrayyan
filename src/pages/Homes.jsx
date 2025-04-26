import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as ScrollLink } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      ScrollLink.scrollTo(location.hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  }, [location]);

  /** helper that wraps each child inside styled card */
  const SectionWrapper = ({ id, children, extraTop = "mt-5" }) => (
    <section id={id} className={`${extraTop} mb-5 px-4 sm:px-6 md:px-10`}>
      <div className="max-w-6xl mx-auto rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
        {children}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors">
     

      <main className="pt-10 lg:pt-15">
        {/* Showcase - bigger top margin */}
        <SectionWrapper id="showcase" extraTop="mt-24">
          <Showcase />
        </SectionWrapper>

        {/* Other sections - normal small margin */}
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="services">
          <Services />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

     
    </div>
  );
}

export default Home;
