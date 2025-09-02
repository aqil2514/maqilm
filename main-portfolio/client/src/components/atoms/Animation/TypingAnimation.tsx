"use client";
import { TypeAnimation } from "react-type-animation";

interface TypingAnimationProps {
  text: string[];
  time?: number;
}

export default function TypingAnimation({
  text,
  time = 1000,
}: TypingAnimationProps) {
  const sequence = text.flatMap((t: string) => [t, time]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-white font-mono"
    />
  );
}
