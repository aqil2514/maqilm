"use client";
import { cn } from "@/lib/utils";
import React from "react";

export default function MainContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gray-900 w-full min-h-screen text-white py-20 px-1 md:px-4 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
