import { NavbarAI } from "@/components/sections/NavbarAI";
import { HeroAI } from "@/components/sections/HeroAI";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProjectsGithub } from "@/components/sections/ProjectsGithub";
import { SkillsAI } from "@/components/sections/SkillsAI";
import { WhyUsAI } from "@/components/sections/WhyUsAI";
import { FooterAI } from "@/components/sections/FooterAI";

export default function Home() {
  return (
    <>
      <NavbarAI />
      <main id="main" className="relative z-10 overflow-hidden">
        <HeroAI />
        <ServicesBento />
        <ProjectsGithub />
        <SkillsAI />
        <WhyUsAI />
      </main>
      <FooterAI />
    </>
  );
}
