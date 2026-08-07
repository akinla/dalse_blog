import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <header
        className="bg-white
      shadow-sm px-5 py-3 dark:bg-black"
      >
        <nav className="flex items-center max-w-7xl mx-auto justify-between">
          <Link href="/">
            <span className="font-bold text-xl">
              Dalse
              <span className="text-green-400">Blog</span>
            </span>
          </Link>
          <div className="flex items-center text-sm gap-5">
            <Link href="/post/create" className="font-medium hover:yellow-">
              Create
            </Link>
            <Link href="/profile"> My post </Link>
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
