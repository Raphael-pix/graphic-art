"use client";

import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import HeroSection from "./_components/Hero";
import AboutSection from "./_components/About";
import CustomCursor from "@/components/customCursor";
import DisplaySection from "./_components/display";
import TeamMembersSection from "./_components/members";

const AboutPage = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "white");
    return () => document.documentElement.removeAttribute("data-theme");
  }, []);

  return (
    <main className="relative min-h-screen">
      <CustomCursor/>
      <NavBar />
      <HeroSection />
      <section className="mt-[100vh]">
        <AboutSection/>
        <DisplaySection/>
        <TeamMembersSection/>
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
