"use client"

import React, { useEffect } from 'react'
import Footer from '@/components/Footer';
import NavBar from '@/components/navbar';
import HeroSection from './_components/Hero';
import WhenSection from './_components/When';
import VideoSection from './_components/video';
import CustomCursor from '@/components/customCursor';
import Services from './_components/Services';
import WhySection from './_components/Why';
import ValuesSection from './_components/Values';
import TestimonialsSection from './_components/Testimonials';

const ServicesPage = () => {

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", "white");
    return () => document.documentElement.removeAttribute("data-theme");
  })

  return (
    <main className="relative min-h-screen">
      <CustomCursor/>
      <NavBar />
      <HeroSection/>
      <WhenSection/>
      <VideoSection/>
      <Services/>
      <WhySection/>
      <ValuesSection/>
      <TestimonialsSection/>
      <Footer />
    </main>
  );
}

export default ServicesPage
