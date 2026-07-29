import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectShowcase from "@/components/ProjectShowcase";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <ProjectShowcase />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

