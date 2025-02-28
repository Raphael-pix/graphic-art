import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import React from "react";
import "iconify-icon"
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <main className="relative min-h-screen ">
      <NavBar />
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <section className="mb-16">
          <h1 className="text-4xl font-normal mb-12">
            PRIVACY POLICY
          </h1>

          <p className="text-xl mb-20">
            This website collects some Personal Data from its Users.
          </p>

          <h2 className="text-4xl font-normal mb-12">
            OWNER AND DATA CONTROLLER
          </h2>

          <p className="text-xl mb-8">
            Graphiq Art GmbH Leopoldstr. 31 80802 München Germany
          </p>

          <p className="text-xl mb-20">
            Owner contact email:{" "}
            <Link
              href="mailto:hello@graphiq.art"
              className="underline hover:text-neutral-grey transition-colors flex items-center"
            >
              hello<iconify-icon icon="mdi:at" width="18" height="18" ></iconify-icon>graphiq.art
            </Link>
          </p>

          <h2 className="text-4xl font-normal mb-12">
            TYPES OF DATA COLLECTED
          </h2>

          <p className="text-xl mb-8">
            Among the types of Personal Data that this Application collects, by
            itself or through third parties, there are: Cookies; Usage Data.
          </p>

          <p className="text-xl mb-16">
            Complete details on each type of Personal Data collected are
            provided in the dedicated sections of this privacy policy or by
            specific explanation texts displayed prior to the Data collection.
          </p>

          <h2 className="text-4xl font-normal mb-12">
            METHOD AND PLACE OF PROCESSING THE DATA
          </h2>

          <h3 className="text-2xl font-normal mb-6">
            Processing methods
          </h3>

          <p className="text-xl mb-8">
            The Data Controller processes the Data of Users in a proper manner
            and takes appropriate security measures to prevent unauthorized
            access, disclosure, modification, or unauthorized destruction of the
            Data.
          </p>

          <p className="text-xl mb-16">
            The Data processing is carried out using computers and/or IT enabled
            tools, following organizational procedures and methods strictly
            related to the purposes indicated.
          </p>

          <h2 className="text-4xl font-normal mb-12">
            THE PURPOSES OF PROCESSING
          </h2>

          <p className="text-xl mb-16">
            The Data concerning the User is collected to allow the Owner to
            provide its services, as well as for the following purposes:
            Analytics and Contacting the User.
          </p>

          <h2 className="text-4xl font-normal mb-12">
            DETAILED INFORMATION ON THE PROCESSING OF PERSONAL DATA
          </h2>

          <p className="text-xl mb-8">
            Personal Data is collected for the following purposes and using the
            following services:
          </p>

          <h3 className="text-2xl font-normal mb-6">Analytics</h3>

          <p className="text-xl mb-16">
            The services contained in this section enable the Owner to monitor
            and analyze web traffic and can be used to keep track of User
            behavior.
          </p>

          <h2 className="text-4xl font-normal mb-12">
            YOUR RIGHTS
          </h2>

          <p className="text-xl mb-8">
            Users may exercise certain rights regarding their Data processed by
            the Owner.
          </p>

          <p className="text-xl mb-8">
            In particular, Users have the right to do the following:
          </p>

          <ul className="list-disc pl-8 text-xl mb-16 space-y-2">
            <li>Withdraw their consent at any time.</li>
            <li>Access their personal data.</li>
            <li>Obtain information about the processing of personal data.</li>
            <li>Rectify inaccurate personal data concerning them.</li>
            <li>Have incomplete personal data completed.</li>
            <li>Have their data erased or removed.</li>
            <li>Restrict the processing of their personal data.</li>
            <li>
              Receive their data in a structured, commonly used and
              machine-readable format.
            </li>
            <li>Lodge a complaint with a supervisory authority.</li>
          </ul>

          <h2 className="text-4xl font-normal mb-12">
            CHANGES TO THIS PRIVACY POLICY
          </h2>

          <p className="text-xl mb-16">
            The Owner reserves the right to make changes to this privacy policy
            at any time by notifying its Users on this page. It is strongly
            recommended to check this page often, referring to the date of the
            last modification listed at the bottom.
          </p>

          <p className="text-xl italic">
            Last updated: February 27, 2025
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
