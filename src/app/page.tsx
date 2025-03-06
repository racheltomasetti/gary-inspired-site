"use client";
import React, { useState } from "react";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import SocialIconButton from "@/components/SocialIconButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-16 gap-8 sm:p-16 sm:pt-6">
      <main className="flex flex-col gap-6 row-start-2 items-center w-full max-w-2xl mt-4">
        {/* Name at the top center */}
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text anton-regular">
          RACHEL TOMASETTI
        </h1>

        {/* Tagline underneath */}
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Building tools to unlock ones <em>Self</em>
        </p>

        <div className="flex justify-center items-center w-full">
          <div className="relative w-full hover:scale-105">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-stone-600 via-blue-600 to-pink-600 opacity-50 blur-2xl"></div>
            <div className="relative w-full h-64 border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300 p-6 overflow-auto">
              <p className="text-center mb-3">
                Hi, I'm Rachel and welcome to{" "}
                <strong>a glimpse into my mind</strong>...
              </p>
            </div>
          </div>
        </div>

        {/* Three buttons in a horizontal row */}
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <SocialIconButton
            platform="linkedin"
            href="https://www.linkedin.com/in/racheltomasetti/"
          />
          <SocialIconButton
            platform="github"
            href="https://github.com/racheltomasetti"
          />
          <SocialIconButton
            platform="instagram"
            href="https://www.instagram.com/racheltomasetti/"
          />
        </div>
      </main>
    </div>
  );
}
