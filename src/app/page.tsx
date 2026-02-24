import { Hero } from "@/components/Hero";
import { Subscription } from "@/components/Subscription";
import { Audience } from "@/components/Audience";
import { Consultant } from "@/components/Consultant";
import { Team } from "@/components/Team";
import { Paquetes } from "@/components/Paquetes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Subscription />
      <Audience />
      <Consultant />
      <Team />
      <Paquetes />
    </main>
  );
}
