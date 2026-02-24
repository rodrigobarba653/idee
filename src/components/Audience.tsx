"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const items = [
  "Tu negocio vende, pero no crece como debería.",
  "Trabajas más horas de las que quisieras.",
  "Sientes que todo depende de ti.",
  "El dinero no se refleja como esperabas.",
  "Sabes que tu negocio puede dar más, pero te falta claridad.",
  "Tienes un negocio en marcha (o a punto de arrancar).",
];

export function Audience() {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 bg-gray-200 border-b-4 border-primary md:p-16 p-8 shadow-slate-300 shadow-lg">
        {/* Left: circular image */}
        <div className="relative mx-auto aspect-square w-full lg:mx-0">
          <Image
            src="/images/audience.png"
            alt="Profesionales revisando documentos"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 384px, 33vw"
          />
        </div>

        {/* Right: heading + checklist */}
        <div className="flex flex-col">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--dark)" }}
          >
            Para quién es
          </p>
          <h2
            className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl"
            style={{ color: "var(--dark)" }}
          >
            Esta clase es para ti si...
          </h2>
          <ul className="flex flex-col gap-3">
            {items.map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-lg bg-neutral-100 px-4 py-3"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark text-white"
                  aria-hidden
                >
                  <Icon icon="mdi:check" width={20} height={20} />
                </span>
                <span className="text-dark">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
