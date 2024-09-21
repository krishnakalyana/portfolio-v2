import { SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <div className="h-[10dvh] sticky top-0 flex w-full p-2 justify-between items-center ">
      <div className="flex gap-x-4">
        <h6 className="tracking-wider uppercase font-light">About</h6>{" "}
        <h6 className="tracking-wider uppercase">Experience</h6>
      </div>
      <Button size={"icon"} variant={"ghost"}>
        <SunIcon />
      </Button>
    </div>
  );
}
