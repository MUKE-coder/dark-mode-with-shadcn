"use client";
import { useTheme } from "next-themes";
import React from "react";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <div
      className={`dark:text-white ${
        theme === "dark" ? "darkBg" : "lightBg"
      } text-slate-900 min-h-screen`}
    >
      <div className="max-w-5xl mx-auto">
        <h2>Hero Section</h2>
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, est.
          Aut ad iusto ab minima amet voluptatibus, dolor ipsam impedit
          distinctio consequuntur architecto earum odit mollitia molestias nulla
          ut vero.
        </p>
        <h2>This is another Heading</h2>
      </div>
    </div>
  );
}
