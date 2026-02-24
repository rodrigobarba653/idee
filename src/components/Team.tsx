"use client";

import { Icon } from "@iconify/react";

const members = [
  {
    name: "Gabriela Madero Irizar",
    specialties:
      "Calidad y Servicio al Cliente, Liderazgo, Manejo de Conflictos, Accountability, Design Thinking.",
    linkedin: "https://www.linkedin.com/in/gaby-madero/",
  },
  {
    name: "Héctor Rafael Samayoa Waldheim",
    specialties:
      "Operación de Tiendas de Conveniencia y Estaciones de Servicio, Neuro Coach Certificado y Mentor Comercial, Evaluación Económica de Proyectos.",
    linkedin: "https://www.linkedin.com/in/hector-samayoa/",
  },
  {
    name: "Miguel Ángel Ortiz González",
    specialties:
      "Venta Consultiva Avanzada, Prospección, Manejo de Cuentas Clave, Exponenciación de Resultados a través de Herramientas, Proyectos de inversión.",
    linkedin: "https://www.linkedin.com/in/miguel-angel-ortiz-7b280911/",
  },
  {
    name: "Juan Manuel Lomelín Baumeister",
    specialties:
      "Venta Consultiva Base y Avanzada, Manejo Estratégico de Cuentas Clave, Sistemas Administrativos, Gestión de Oportunidades de Venta, Inteligencia Artificial aplicada a Negocios y Ventas.",
    linkedin: "https://www.linkedin.com/in/juanmanuellomelinbaumeister/",
  },
];

export function Team() {
  return (
    <section className="w-full py-16 px-6">
      {/* Dark blue header */}
      <div className="rounded-2xl overflow-hidden md:px-16 px-8 py-16 max-w-6xl mx-auto text-center relative">
        <div className="bg-[#202636] w-full lg:h-[480px] md:h-[620px] sm:h-[680px] h-[1200px] rounded-2xl absolute top-0 left-0 z-1"></div>
        <span className="mb-3 inline-block rounded border border-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white relative z-2">
          Nuestros expertos
        </span>
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-16 relative z-2">
          Equipo IDEE
        </h2>

        {/* White area with overlapping cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 relative z-2">
          {members.map((member, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl bg-white p-6 shadow-lg text-center"
            >
              <h3 className="mb-2 text-2xl font-bold text-dark">
                {member.name}
              </h3>
              <p className="mb-4 flex-1 border-b border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-600">
                {member.specialties}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 rounded-full bg-neutral-200 w-8 h-8 text-dark"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Icon icon="mdi:linkedin" width={22} height={22} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
