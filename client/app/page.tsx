import { About } from "./components/About";
import { Contact } from "./components/Contact";

import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
      <Contact />
    </main>
  );
}
