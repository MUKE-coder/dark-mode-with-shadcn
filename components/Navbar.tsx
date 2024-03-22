import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="py-4 px-8 flex justify-between items-center max-w-5xl">
      <h2>Logo</h2>
      <ModeToggle />
    </div>
  );
}
