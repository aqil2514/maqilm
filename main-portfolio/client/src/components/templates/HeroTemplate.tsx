"use client";

import MainContainer from "../organisms/container-main";
import ParticlesAnimation from "../atoms/animation-particles";
import HeroSection from "../organisms/home/HeroSection";

export default function HeroTemplate() {
  return (
    <MainContainer className="overflow-hidden bg-transparent">
      <ParticlesAnimation />
      <HeroSection />
    </MainContainer>
  );
}
