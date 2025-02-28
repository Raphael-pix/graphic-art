import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const PressPage = () => {
  return (
    <main className="relative min-h-screen ">
      <NavBar />
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-normal mb-20">
            Get to know GRAPHIQ.ART
          </h1>
          <h2 className="text-3xl md:text-4xl font-normal mb-8">
            Press Releases & images
          </h2>
          <p className="text-lg text-neutral-grey mb-8 max-w-2xl">
            Please click here for our digital press kit including our latest
            press releases, press images and logo:
          </p>
          <Link
            href="/files/graphiq.art_Presskit.zip"
            className="text-lg underline hover:text-neutral-grey transition-colors"
          >
            GRAPHIQ.ART.Presskit.zip
          </Link>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-normal mb-8">
            Press Contact
          </h2>
          <p className="text-lg">
            Amadeus Estifanos |{" "}
            <a
              href="mailto:amadeus@graphiq.art"
              className="underline hover:text-neutral-grey transition-colors flex items-center"
            >
              amadeus<iconify-icon icon="mdi:at" width="18" height="18" ></iconify-icon>graphiq.art
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PressPage;
