"use client";
import { FULLNAME } from "@/constants/Profile";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <section
      id="about"
      className="h-dvh flex  p-2 flex-col justify-end bg-slate-900 relative "
    >
      <motion.h1
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="text-2xl sm:text-4xl md:text-8xl font-extrabold uppercase tracking-tighter text-teal-400 "
      >
        {FULLNAME}
      </motion.h1>
      <motion.h2
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
        className="text-xs sm:text-xl md:text-4xl font-thin  "
      >
        Senior Software Engineer
      </motion.h2>
      <div className="absolute bottom-4 right-4 flex flex-col ">
        <Link href={"#skills"}>
          <Button>
            <CaretDownIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
}
