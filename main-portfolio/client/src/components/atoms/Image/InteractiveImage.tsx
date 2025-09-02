"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { urlFor } from "@/lib/sanity/helper";

export default function InteractiveImage({ value }: { value: any }) {
  return (
    <div className="my-6 w-full flex justify-center">
      <Dialog>
        {/* Gambar dengan efek hover & trigger modal */}
        <DialogTrigger asChild>
          <motion.div
            className="relative w-full max-w-2xl h-64 sm:h-80 md:h-96 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={urlFor(value.asset).url()}
              alt={value.alt || "Image"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </DialogTrigger>

        {/* Modal untuk gambar yang diperbesar */}
        <DialogContent className="max-w-4xl w-full">
          <DialogTitle>Image</DialogTitle>
          <DialogDescription>Image</DialogDescription>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full h-[80vh]"
          >
            <Image
              src={urlFor(value.asset).url()}
              alt={value.alt || "Image"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
