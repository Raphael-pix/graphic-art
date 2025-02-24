import React from "react";
import { CompanyName } from "@/components/companyName";
import NavBar from "@/components/navbar";
import Footer from "@/components/Footer";
import Trending from "./_components/Trending";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import About from "./_components/About";
import Hero from "./_components/Hero";
import BottomSection from "./_components/Bottom";
import CustomCursor from "@/components/customCursor";
// import IntroSequence from "./_components/Intro-sequence";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen">
      <CustomCursor/>
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
