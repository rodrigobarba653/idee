"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const plans = [
  {
    name: "Basic Plan",
    price: "160",
    features: [
      { text: "Business Solution", included: true },
      { text: "24/7 Consultant Service", included: true },
      { text: "Great Customer Support", included: true },
      { text: "Market Growth Solution", included: false },
      { text: "24/7 Consultant Service", included: false },
    ],
  },
  {
    name: "Standard Plan",
    price: "180",
    features: [
      { text: "Business Solution", included: true },
      { text: "24/7 Consultant Service", included: true },
      { text: "Great Customer Support", included: true },
      { text: "Market Growth Solution", included: false },
      { text: "24/7 Consultant Service", included: false },
    ],
  },
  {
    name: "Premium Plan",
    price: "260",
    features: [
      { text: "Business Solution", included: true },
      { text: "24/7 Consultant Service", included: true },
      { text: "Great Customer Support", included: true },
      { text: "Market Growth Solution", included: true },
      { text: "24/7 Consultant Service", included: true },
    ],
  },
];

export function Paquetes() {
  const [activeTab, setActiveTab] = useState<"individuales" | "diplomado">(
    "individuales",
  );

  return (
    <section className="w-full bg-white">
      {/* Red line */}
      <div
        className="mx-auto h-1 max-w-6xl"
        style={{ backgroundColor: "var(--primary)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-16 lg:py-16">
        {/* Intro + toggle */}
        <div className="mb-16 flex flex-col gap-4 text-center">
          <h2
            className="text-lg font-semibold md:text-xl"
            style={{ color: "var(--primary)" }}
          >
            Empieza gratis y avanza cuando estés listo.
          </h2>
          <h3 className="text-3xl font-bold text-dark md:text-4xl">
            ¿Quieres ir más allá de la clase?
          </h3>
          <p className="max-w-2xl text-neutral-600 mx-auto">
            La clase gratuita es el primer paso. Si quieres estructura completa,
            acompañamiento y profundidad tenemos los siguientes planes para ti.
          </p>
        </div>

        <div className="md:flex justify-between gap-4 mb-8">
          <h4 className="mb-8 text-2xl font-bold text-dark lg:text-3xl md:text-left text-center">
            Planes
          </h4>
          <div className="flex shrink-0 gap-0 rounded-lg border border-neutral-300 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("individuales")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors w-1/2 ${
                activeTab === "individuales"
                  ? "bg-dark text-white"
                  : "bg-transparent text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Paquetes individuales
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("diplomado")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors w-1/2 ${
                activeTab === "diplomado"
                  ? "bg-dark text-white"
                  : "bg-transparent text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Diplomado empresarial
            </button>
          </div>
        </div>

        {/* Cards on dotted background */}
        <div className="grid md:gap-6 gap-16 md:grid-cols-3 mt-18">
          {plans.map((plan, i) => (
            <article
              key={i}
              className="relative flex flex-col rounded-xl bg-cover bg-center bg-no-repeat px-6 pb-6 pt-16 shadow-lg shadow-slate-200"
              style={{ backgroundImage: "url(/images/packages-bg.png)" }}
            >
              <div
                className="mb-4 inline-flex flex-col rounded-lg px-8 py-3 absolute -top-8"
                style={{ backgroundColor: "var(--dark)" }}
              >
                <span className="text-xs text-neutral-300">/month</span>
                <span className="text-2xl font-bold text-white">
                  ${plan.price}
                </span>
              </div>
              <p className="mb-1 text-sm text-neutral-500">Starter Package</p>
              <h5 className="mb-6 text-xl font-bold text-dark">{plan.name}</h5>
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    {f.included ? (
                      <Icon
                        icon="mdi:check"
                        className="mt-0.5 shrink-0 text-dark"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Icon
                        icon="mdi:check-circle-outline"
                        className="mt-0.5 shrink-0 text-neutral-400"
                        width={20}
                        height={20}
                      />
                    )}
                    <span
                      className={
                        f.included
                          ? "text-sm text-dark"
                          : "text-sm text-neutral-400"
                      }
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/525551048399"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-95"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Buy This
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
