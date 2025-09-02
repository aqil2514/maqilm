import clsx from "clsx";
import React from "react";

export default function ProfessionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ overflowWrap: "anywhere" }}
      className={clsx("grid gap-4 md:grid-cols-[30%_auto] p-4", className)}
    >
      {children}
    </div>
  );
}
