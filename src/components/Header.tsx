"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const socialLinks = [
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:twitter", href: "#", label: "Twitter" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
] as const;

export function Header() {
  return (
    <header className="w-full">
      {/* Top red bar with social icons */}
      <div
        className="flex h-9 w-full items-center justify-end px-4 md:px-8"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="flex items-center gap-0 text-white border-l border-white/60">
          {socialLinks.map((item, i) => (
            <span key={item.label} className="flex items-center">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-1.5 transition-opacity hover:opacity-90"
                aria-label={item.label}
              >
                <Icon icon={item.icon} className="h-4 w-4" />
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav: white bar with logo */}
      <div className="flex h-20 w-full items-center bg-white px-4 shadow-sm md:px-8">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-auto object-contain md:h-14"
            priority
          />
        </a>
      </div>
    </header>
  );
}
