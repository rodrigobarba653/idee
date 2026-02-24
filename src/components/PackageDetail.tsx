import Image from "next/image";

export type PackageStep = {
  stepNumber: string;
  title: string;
  content: string;
  picture?: { url: string; alt?: string } | null;
};

export type PackageDetailProps = {
  title: string;
  subtitle?: string | null;
  featuredImage?: { url: string; alt?: string } | null;
  steps: PackageStep[];
};

export function PackageDetail({
  title,
  subtitle,
  featuredImage,
  steps,
}: PackageDetailProps) {
  return (
    <main className="w-full bg-white" role="main">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-16 lg:py-16">
        {/* Header: title + optional subtitle */}
        <header className="mb-8 text-center lg:mb-12">
          <h1
            className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: "var(--dark)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-neutral-600 md:text-xl">{subtitle}</p>
          )}
        </header>

        {/* Optional featured image */}
        {featuredImage?.url && (
          <div className="relative mb-10 w-full overflow-hidden rounded-xl lg:mb-14">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt ?? ""}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Steps: alternating image left/right */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const hasImage = step.picture?.url;

            return (
              <div
                key={index}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                {/* Image column (hidden on mobile if no image, or show first) */}
                {hasImage && (
                  <div
                    className={`relative aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-100 ${
                      !isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={step.picture!.url}
                      alt={step.picture!.alt ?? `Paso ${step.stepNumber}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Text column */}
                <div
                  className={`flex flex-col justify-center ${
                    !isEven && hasImage ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p
                    className="mb-2 text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "var(--primary)" }}
                  >
                    {step.stepNumber}
                  </p>
                  <h2
                    className="mb-4 text-xl font-bold md:text-2xl"
                    style={{ color: "var(--dark)" }}
                  >
                    {step.title}
                  </h2>
                  <div
                    className="prose prose-neutral max-w-none text-neutral-600 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.content }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
