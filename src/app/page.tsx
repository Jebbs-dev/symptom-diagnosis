import { Features } from "@/modules/landing/features/features";
import { HeroSection } from "@/modules/landing/herosection";
import { InfoSection } from "@/modules/landing/infosection/infosection";
import { History } from "@/modules/landing/history/diagnosis-history";
import Image from "next/image";
import { Signin } from "@/components/forms/signin/signin";
import { HistoryModal } from "@/modules/special/history-modal";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <InfoSection />
      <Features />
      <History />
    </main>
  );
}
