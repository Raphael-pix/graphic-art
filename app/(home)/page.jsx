"use client"

import React, { useEffect } from "react";
import { CompanyName } from "@/components/companyName";
import NavBar from "@/components/navbar";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import About from "./_components/About";
import Hero from "./_components/Hero";
import BottomSection from "./_components/Bottom";
import CustomCursor from "@/components/customCursor";
import Preloader from "@/components/preloader";
// import IntroSequence from "./_components/Intro-sequence";

export default function Home() {
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", "pink");
      return () => document.documentElement.removeAttribute("data-theme");
    }, []);
  return (
    <main className="relative min-h-screen">
      <CustomCursor/>
      <Preloader/>
      {/* <IntroSequence/> */}
      <CompanyName/>
      <NavBar />
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <BottomSection/>
    </main>
  );
}
