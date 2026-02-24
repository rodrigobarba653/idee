export function Subscription() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: text + form */}
        <div className="flex flex-col">
          <h2
            className="mb-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "var(--dark)" }}
          >
            ¿Tu negocio ya vende, pero tú sigues agotado, apagando fuegos y sin
            ver el crecimiento que esperabas?
          </h2>
          <p className="mb-8 text-base text-neutral-600 md:text-lg">
            Toma gratis nuestra clase táctica de 20 minutos enfocada en la
            operación diaria y la toma de decisiones clave para tu negocio.
          </p>

          {/* Form card */}
          <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
            <h3
              className="text-xl font-bold md:text-2xl"
              style={{ color: "var(--dark)" }}
            >
              Inscríbete Gratis
            </h3>
            <p className="mb-6 mt-1 text-sm text-neutral-500">
              Value Lab gratuito de 20 minutos.
            </p>
            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Nombre"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Apellido"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="rounded-lg border border-neutral-300 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Correo electrónico"
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows={4}
                className="resize-y rounded-lg border border-neutral-300 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Mensaje"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-95 sm:w-auto"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Right: video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-200 lg:sticky lg:top-8 lg:aspect-4/3 lg:self-start">
          {/* Placeholder: replace with your video thumbnail or iframe embed */}
          <div className="absolute inset-0 bg-neutral-300" aria-hidden />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity hover:opacity-95"
            style={{ backgroundColor: "var(--primary)" }}
            aria-label="Reproducir video"
          >
            <svg
              className="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
