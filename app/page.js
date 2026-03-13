import Hero from "@/components/hero/Hero";
import CarpsApproach from "@/components/home/CarpsApproach";
import EnterpriseSkills from "@/components/home/EnterpriseSkills";
import CareerCTA from "@/components/home/CareerCTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <CarpsApproach />
      <EnterpriseSkills />
      <CareerCTA />

    </main>
  );
}