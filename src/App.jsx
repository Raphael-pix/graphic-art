import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Projects from "./components/projects";
import Services from "./components/services";
import { useEffect, useState } from "react";
import IntroSequence from "./components/IntroSequence";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Handle when the intro animation is complete
  useEffect(() => {
    if (introFinished) {
      document.body.style.overflow = "auto"; // Allow scrolling after intro
    }
  }, [introFinished]);
  return (
    <>
      {!introFinished && (
        <IntroSequence onComplete={() => setIntroFinished(true)} />
      )}
      {introFinished && (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Story />
          <Contact />
          {/* <Footer /> */}
        </main>
      )}
    </>
  );
}

export default App;
