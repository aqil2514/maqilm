import clsx from "clsx";
import React from "react";

export default function GreetingsContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "border-t-8 md:w-full border-double border-white md:border-none pt-4",
        className
      )}
    >
      {children}
    </div>
  );
}
