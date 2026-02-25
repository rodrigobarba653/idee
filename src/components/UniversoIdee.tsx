"use client";

import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { universoIdee } from "@/data/universoIdee";

type TabId = "base" | "empresario" | "avanzado" | "diplomado";

const TABS: { id: TabId; label: string }[] = [
  { id: "base", label: "Ordena · Crece · Lidera" },
  { id: "empresario", label: "Empresario Exitoso" },
  { id: "avanzado", label: "Especialización" },
  { id: "diplomado", label: "Diplomado" },
];

const SUMMARY_ICONS = [
  "mdi:book-open-page-variant",
  "mdi:package-variant",
  "mdi:layers",
  "mdi:check-circle",
] as const;

type PackageCardProps = {
  title: string;
  moduleCount: string;
  moduleRange: string;
  descriptionTitle: string;
  descriptionSub: string;
  listLabel: string;
  items: string[];
  priceUsd?: number;
  requiresPrevious?: string;
  variant?: "basic" | "full" | "advanced" | "diplomado";
};

/** Card in Paquetes style: bg image, dark badge, checkmarks, red button */
function BasicPackageCardStyle({
  title,
  moduleCount,
  moduleRange,
  descriptionTitle,
  items,
  priceUsd,
  requiresPrevious,
}: PackageCardProps) {
  return (
    <article
      className="relative flex flex-col rounded-xl bg-cover bg-center bg-no-repeat px-6 pb-6 pt-16 shadow-lg shadow-slate-200"
      style={{ backgroundImage: "url(/images/packages-bg.png)" }}
    >
      <div
        className="absolute -top-8 inline-flex flex-col rounded-lg px-6 py-3"
        style={{ backgroundColor: "var(--dark)" }}
      >
        <span className="text-xs text-neutral-300">{moduleRange}</span>
        <span className="text-2xl font-bold text-white">{moduleCount}</span>
      </div>
      {requiresPrevious && (
        <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-md bg-amber-400 px-2.5 py-1 text-xs font-semibold text-amber-950">
          <Icon icon="mdi:lock-outline" width={14} height={14} />
          Requiere: {requiresPrevious}
        </span>
      )}
      {priceUsd != null && (
        <p className="mb-2 text-lg font-bold text-dark">
          ${priceUsd} <span className="text-sm font-normal text-neutral-500">USD</span>
        </p>
      )}
      <h3 className="mb-1 text-xl font-bold text-dark">{title}</h3>
      <p className="mb-4 text-sm text-neutral-600">{descriptionTitle}</p>
      <ul className="mb-8 flex flex-1 flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Icon
              icon="mdi:check"
              className="mt-0.5 shrink-0 text-dark"
              width={20}
              height={20}
            />
            <span className="text-sm text-dark">{item}</span>
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
        Comprar
      </a>
    </article>
  );
}

function PackageCard({
  title,
  moduleCount,
  moduleRange,
  descriptionTitle,
  descriptionSub,
  listLabel,
  items,
  variant = "basic",
}: PackageCardProps) {
  const isFullWidth = variant === "full" || variant === "diplomado";
  const isDark = variant === "diplomado" || variant === "advanced";

  return (
    <div
      className={`rounded-xl p-6 text-white shadow-lg ${
        isDark ? "bg-dark" : "bg-primary"
      } ${isFullWidth ? "w-full" : ""}`}
    >
      <h3 className="mb-2 text-xl font-bold md:text-2xl">{title}</h3>
      <p className="mb-1 text-3xl font-bold md:text-4xl">{moduleCount}</p>
      <p className="mb-4 text-sm opacity-90">{moduleRange}</p>
      <div className="mb-4">
        <strong className="block">{descriptionTitle}</strong>
        <span className="text-sm opacity-95">{descriptionSub}</span>
      </div>
      <div className="text-sm opacity-95">
        <strong>{listLabel}</strong>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function UniversoIdee() {
  const [activeTab, setActiveTab] = useState<TabId>("base");
  const {
    basicPackages,
    empresarioExitoso,
    advancedPackages,
    diplomado,
    summary,
  } = universoIdee;

  return (
    <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-16 pt-0!">
      <div className="mx-auto max-w-6xl">
        {/* Title + subtitle */}
        <header className="mb-12">
          <h2
            className="mb-2 text-3xl font-bold md:text-4xl"
            style={{ color: "var(--dark)" }}
          >
            {universoIdee.title}
          </h2>
          <p className="text-lg text-neutral-600">{universoIdee.subtitle}</p>
        </header>

        {/* Tabs */}
        <div
          className="mb-16 flex gap-1 rounded-xl border border-neutral-300 p-1.5 w-fit"
          role="tablist"
          aria-label="Paquetes IDEE"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors md:px-5 md:text-base ${
                activeTab === tab.id
                  ? "border-dark bg-dark text-white"
                  : "border-transparent bg-neutral-100 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-200"
              }`}
              aria-pressed={activeTab === tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="min-h-[320px]"
        >
          {activeTab === "base" && (
            <div className="relative pt-8">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
                {basicPackages.map((pkg, i) => (
                  <Fragment key={pkg.id}>
                    <BasicPackageCardStyle {...pkg} variant="basic" />
                    {i < basicPackages.length - 1 && (
                      <div
                        className="flex justify-center md:hidden"
                        aria-hidden
                      >
                        <div className="pointer-events-none flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                          <Icon
                            icon="mdi:arrow-down"
                            className="text-dark"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
              <div
                className="pointer-events-none absolute left-1/3 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md md:flex"
                aria-hidden
              >
                <Icon
                  icon="mdi:arrow-right"
                  className="text-dark"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="pointer-events-none absolute left-2/3 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md md:flex"
                aria-hidden
              >
                <Icon
                  icon="mdi:arrow-right"
                  className="text-dark"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          )}

          {activeTab === "empresario" && (
            <div className="pt-8">
              <BasicPackageCardStyle {...empresarioExitoso} variant="basic" />
            </div>
          )}

          {activeTab === "avanzado" && (
            <div className="grid gap-16 pt-8 md:grid-cols-2 md:gap-6">
              {advancedPackages.map((pkg) => (
                <BasicPackageCardStyle key={pkg.id} {...pkg} variant="basic" />
              ))}
            </div>
          )}

          {activeTab === "diplomado" && (
            <div className="pt-8">
              <BasicPackageCardStyle {...diplomado} variant="basic" />
            </div>
          )}
        </div>

        {/* Summary – gray card style (icon, number, label per card) */}
        <div className="rounded-2xl bg-neutral-100 px-6 py-8 md:px-10 md:py-10 mt-24">
          <h3
            className="mb-8 text-center text-xl font-bold md:text-2xl"
            style={{ color: "var(--dark)" }}
          >
            {summary.title}
          </h3>
          <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {summary.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--dark)" }}
                  aria-hidden
                >
                  <Icon icon={SUMMARY_ICONS[i]} width={28} height={28} />
                </span>
                <span className="text-2xl font-bold text-dark md:text-3xl">
                  {stat.number}
                </span>
                <span className="text-sm font-medium text-dark">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-center text-sm text-neutral-700 md:text-base">
            <p>
              <strong>{summary.paragraphs[0]}</strong>
            </p>
            <p>
              <strong>{summary.paragraphs[1]}</strong>
            </p>
            <p>
              <strong>Gran Total:</strong> {summary.paragraphs[2]}
            </p>
            <p className="italic text-neutral-600">{summary.paragraphs[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
