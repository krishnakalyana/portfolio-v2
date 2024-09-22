"use client";
import { SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Nav() {
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    setCurrentHash(window?.location?.hash);
  }, [window?.location?.hash]);
  return (
    <div className="h-[10dvh] static top-0 flex w-full p-2 justify-between items-center ">
      <div className="flex gap-x-4 hover:cursor-pointer">
        <motion.h6
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="tracking-wider uppercase"
        >
          <Link href={"#about"}>About</Link>
        </motion.h6>
        <motion.h6
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
          className="tracking-wider uppercase"
        >
          <Link href={"#skills"}>Skills</Link>
        </motion.h6>
        <motion.h6
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
          className="tracking-wider uppercase"
        >
          <Link href={"#experience"}>Experience</Link>
        </motion.h6>
      </div>
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 0.2 }}
      >
        <Button size={"icon"} className="bg-transparent hover:bg-transparent">
          <SunIcon />
        </Button>
      </motion.div>
    </div>
  );
}
