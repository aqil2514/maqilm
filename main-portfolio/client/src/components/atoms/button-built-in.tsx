"use client";
import yuhomyan from "@/modules/button-yuhomyan.module.css";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Style template yang saya gunakan.
 * - default = Ini adalah template button buatan saya sendiri.
 * - yuhomyan = Ini adalah template button yang dibuat oleh yuhomyan. Lihat lebih lanjut di sini https://codepen.io/yuhomyan/pen/OJMejWJ
 */
type StyleTemplate = "default" | "yuhomyan";

/** Interface untuk button. Mewarisi semua atribute dari HTML Button */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleTemplate: StyleTemplate;
  styleNumber: number;
  children: React.ReactNode;
}

export default function Button({
  styleTemplate,
  children,
  styleNumber,
  className,
  ...props
}: ButtonProps) {
  let template;

  switch (styleTemplate) {
    case "yuhomyan":
      template = yuhomyan;
      break;
    default:
      template = yuhomyan;
      break;
  }

  const customButton = template["custom-btn"];
  const numberStyle = template[`btn-${styleNumber}`];

  return <button className={cn(`${customButton} ${numberStyle}`, className)} {...props}> <span>{children}</span></button>;
}
