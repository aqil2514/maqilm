"use client";

import MainContainer from "../layouts/container/ContainerMain";
import ParticlesAnimation from "../atoms/Animation/ParticleAnimation";
import HeroSection from "../organisms/home/HeroSection";

export default function HeroTemplate() {
  return (
    <MainContainer className="overflow-hidden bg-transparent p-0">
      <ParticlesAnimation />
      <HeroSection />
    </MainContainer>
  );
}
