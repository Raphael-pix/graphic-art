import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import React from "react";

const ImprintPage = () => {
  return (
    <main className="relative min-h-screen ">
      <NavBar />
      <div className="max-w-xl mx-auto px-4 py-16 sm:py-24">
        <section className="mb-16">
          <h1 className="text-4xl font-normal mb-12">
            Angaben gemäß § 5 TMG:
          </h1>

          <p className="text-xl mb-12">Serious Business GmbH</p>

          <h2 className="text-4xl font-normal mb-8">
            Anschrift:
          </h2>

          <p className="text-xl mb-1">Leopoldstr. 31</p>
          <p className="text-xl mb-12">80802 München</p>

          <h2 className="text-4xl font-normal mb-8">Kontakt:</h2>

          <p className="text-xl mb-1">
            Telefon: +49 89 2500664 10
          </p>
          <p className="text-xl mb-1">
            E-Mail:{" "}
            <a
              href="mailto:hello@serious.business"
              className="underline hover:text-neutral-grey transition-colors"
            >
              hello@serious.business
            </a>
          </p>
          <p className="text-xl">
            Internet:{" "}
            <a
              href="https://www.serious.business"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-grey transition-colors"
            >
              www.serious.business
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ImprintPage;
