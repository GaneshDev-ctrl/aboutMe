"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border">
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              width={44}
              height={44}
              className="object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <h1
              className={`font-bold text-sm uppercase transition-colors
                
              `}
            >
              Ganesh
            </h1>
            <p
              className={`text-xs transition-colors
              `}
            >
              FULL STACK DEVELOPER
            </p>
          </div>
        </div>

        {/* RIGHT: Menu + Button */}
        <div className="flex items-center gap-10">
          <ul
            className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors
            `}
          >
            <li><Link href="#home">HOME</Link></li>
            <li><Link href="#about">ABOUT</Link></li>
            <li><Link href="#services">SERVICES</Link></li>
            <li><Link href="#works">WORKS</Link></li>
            <li><Link href="#contact">CONTACT</Link></li>
          </ul>

          <Link
            href="#contact"
            className={`px-5 py-2 text-sm font-semibold border transition-all
              ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-black hover:bg-white hover:text-black"
              }
            `}
          >
            HIRE ME
          </Link>
        </div>

      </nav>
    </header>
  );
}
