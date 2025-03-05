"use client";

import React, { useEffect } from "react";
import { CompanyName } from "@/components/companyName";
import NavBar from "@/components/navbar";
import Projects from "./_components/Projects";
import About from "./_components/About";
import Hero from "./_components/Hero";
import BottomSection from "./_components/Bottom";
import CustomCursor from "@/components/customCursor";
import Preloader from "@/components/preloader";
import Services from "@/components/Services";

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "pink");
    return () => document.documentElement.removeAttribute("data-theme");
  }, []);
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Preloader />
      <CompanyName />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <BottomSection />
    </main>
  );
}
