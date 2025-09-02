import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { slideLeftVariant } from "@/utils/animation/motion-variants";

export default function WorkExperienceContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={slideLeftVariant}
      initial="initial"
      animate="animate"
      className={clsx(
        "border-t-8 border-double border-white md:border-none p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
