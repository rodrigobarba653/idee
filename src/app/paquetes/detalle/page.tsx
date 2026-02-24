import type { Metadata } from "next";
import { PackageDetail } from "@/components/PackageDetail";
import { samplePackageDetail } from "@/data/samplePackageDetail";

export const metadata: Metadata = {
  title: "Detalle del paquete",
  description:
    "Conoce los pasos y beneficios de nuestros paquetes y planes IDEE.",
};

export default function PaqueteDetallePage() {
  return (
    <PackageDetail
      title={samplePackageDetail.title}
      subtitle={samplePackageDetail.subtitle}
      featuredImage={samplePackageDetail.featuredImage}
      steps={samplePackageDetail.steps}
    />
  );
}
