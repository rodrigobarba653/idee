"use client";

import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
          <a
            href="https://wa.me/525551048399"
            className="flex items-center gap-2 transition-colors hover:text-dark"
            aria-label="WhatsApp"
          >
            <Icon icon="mdi:whatsapp" className="h-4 w-4 shrink-0" />
            +52 55 5104 8399
          </a>
          <a
            href="mailto:contacto@idee.academy"
            className="flex items-center gap-2 transition-colors hover:text-dark"
            aria-label="Email"
          >
            <Icon icon="mdi:email-outline" className="h-4 w-4 shrink-0" />
            contacto@idee.academy
          </a>
        </div>
        <p className="text-center text-sm text-neutral-600">
          © 2026 IDEE. Todos los derechos reservados.
          {" · "}
          <a
            href="/aviso-de-privacidad"
            className="underline transition-colors hover:text-dark"
          >
            Aviso de Privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}
