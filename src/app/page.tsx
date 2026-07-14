import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { CodeVoyageJourney } from "@/components/sections/CodeVoyageJourney";
import { JudgesMentors } from "@/components/sections/JudgesMentors";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CodeVoyageJourney />
        <JudgesMentors />
        <CinematicReveal />
      </main>
      <Footer />
    </>
  );
}
