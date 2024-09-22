import { CaretUpIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="h-dvh relative p-2 bg-slate-900">
      <div className="flex">
        <h2>Exp</h2>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col">
        <Link href={"#skills"}>
          <Button>
            <CaretUpIcon />
          </Button>
        </Link>
        <Link href={"#about"}>
          <Button>
            <DoubleArrowUpIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
}
