import React from "react";

interface ContactOptionButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function ContactOptionButton({ label, isActive, onClick }: ContactOptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-2 md:px-4 font-poppins py-2 rounded duration-500 transform ${
        isActive
          ? "bg-sky-500 text-white scale-105 shadow-lg"
          : "bg-white text-slate-800 scale-100 shadow-sm"
      } hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500`}
    >
      {label}
    </button>
  );
}
