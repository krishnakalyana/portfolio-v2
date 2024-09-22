"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
export default function Skills() {
  return (
    <section id="skills" className="h-dvh relative">
      skills
      <motion.div
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="flex gap-x-4 font-extrabold text-sm sm:text-lg md:text-xl flex-wrap max-w-lg "
      >
        <h3>#ReactJS</h3>
        <h3>#Javascript</h3>
        <h3>#NextJS</h3>
        <h3>#NodeJS</h3>
        <h3>#MongoDB</h3>
        <h3>#MUI</h3>
        <h3>#HTML</h3>
        <h3>#Tailwind CSS</h3>
        <h3>#CSS</h3>
        <h3>#TypeScript</h3>
      </motion.div>
      <div className="absolute bottom-4 right-4 flex flex-col ">
        <Link href={"#about"}>
          <Button>
            <CaretUpIcon />
          </Button>
        </Link>
        <Link href={"#experience"}>
          <Button>
            <CaretDownIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
}
