import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection id="" />
      <ProjectsSection id="projects" />
      <TapeSection id="tape" />
      <TestimonialsSection id="testimonials" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
      <Footer id="footer" />
    </div>
  );
}