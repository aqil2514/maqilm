import React from "react";
import GreetingsContainer from "@/components/organisms/container-greetings";
import { useTranslations } from "next-intl";
import AnimatedSpan from "./animated-span";

type FieldId = Omit<GenType.FieldId, "unselected">;

export default function Greetings({ fieldId }: { fieldId: FieldId }) {
  const t = useTranslations("Profile.professions");

  const query = `${fieldId}.greetings` as const;
  // @ts-expect-error
  const greetingsWords = t(query);

  return (
    <GreetingsContainer>
      <div>
        {greetingsWords.split(" ").map((word, index) => (
          <AnimatedSpan key={index} delay={index * 0.01}>
            {word + "\u00A0"}
          </AnimatedSpan>
        ))}
      </div>
    </GreetingsContainer>
  );
}
