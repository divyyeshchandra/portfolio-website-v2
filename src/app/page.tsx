import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      {/* Hero animates on initial load — no intersection needed */}
      <AnimatedSection delay={0}>
        <Hero />
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <Experience />
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <Skills />
      </AnimatedSection>
    </>
  );
}
