import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isActive(url: string, pathname: string) {
  return new RegExp(`^${url}(/|$)`).test(pathname);
}
