"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:clipboard-text-outline",
    title: "Best Business Consulting",
    description:
      "Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum",
  },
  {
    icon: "mdi:headset",
    title: "24/7 Customer Support",
    description:
      "Fusce condimentum mattis placerat odio donec lacus porta torquent, mauris gravida rutrum",
  },
];

const stats = [
  { icon: "mdi:cog-outline", value: "1,200+", label: "Business Solution" },
  {
    icon: "mdi:account-supervisor-outline",
    value: "2.2k",
    label: "Solution Experts",
  },
  { icon: "mdi:earth", value: "196k", label: "Worldwide Partner" },
];

export function Consultant() {
  return (
    <section className="w-full bg-white">
      {/* Top: content + image */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 pt-16 lg:px-16">
        {/* Left: tagline, heading, features, CTA */}
        <div className="flex flex-col">
          <span className="mb-4 inline-block w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100">
            Business Consultancy
          </span>
          <h2
            className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl"
            style={{ color: "var(--dark)" }}
          >
            ¿Por qué IDEE?
          </h2>
          <ul className="mb-8 flex flex-col gap-6">
            {features.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-dark"
                  aria-hidden
                >
                  <Icon icon={item.icon} width={24} height={24} />
                </span>
                <div>
                  <h3 className="mb-1 font-bold text-dark">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="mailto:contacto@idee.academy"
            className="inline-flex w-fit items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-95"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Contáctanos
          </a>
        </div>

        {/* Right: composed circle image */}
        <div className="relative aspect-square w-full max-w-lg justify-self-center lg:max-w-none">
          <Image
            src="/images/consultant.png"
            alt="Equipo de consultoría IDEE"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 512px, 50vw"
          />
        </div>
      </div>

      {/* Bottom: stat cards */}
      <div className="bg-white px-6 py-8 lg:px-16 lg:py-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-xl bg-neutral-100 p-6 text-center"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "var(--dark)" }}
                aria-hidden
              >
                <Icon icon={stat.icon} width={28} height={28} />
              </span>
              <span className="text-2xl font-bold text-dark md:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-dark">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
