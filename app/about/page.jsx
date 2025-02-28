import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import HeroSection from "./_components/Hero";
import AboutSection from "./_components/About";
import CustomCursor from "@/components/customCursor";
import DisplaySection from "./_components/display";
import TeamMembersSection from "./_components/members";

const AboutPage = () => {
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
