import CustomerImpact from "@/components/home/CustomerImpact";
import HeroSection from "@/components/home/HeroSection";
import MedicalTeam from "@/components/home/MedicalTeam";
import MoneyBack from "@/components/home/MoneyBack";
import NewWay from "@/components/home/NewWay";
import ThreeStep from "@/components/home/ThreeStep";
import VideoSection from "@/components/home/VideoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewWay />
      <VideoSection />
      <ThreeStep />
      <CustomerImpact />
      <MedicalTeam />
      <MoneyBack />
    </main>
  );
}
