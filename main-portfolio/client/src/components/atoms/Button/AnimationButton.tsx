import { Link } from "@/i18n/routing";
import "@/styles/button-built-in.css";
import { useTranslations } from "next-intl";
import React from "react";

interface ButtonAnimationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonAnimation({ children, ...props }: ButtonAnimationProps) {
  return (
    <button className="animated-button" {...props}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}
