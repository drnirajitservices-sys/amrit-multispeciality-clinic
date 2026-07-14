import HeroCarousel from "@/components/HeroCarousel";
import AboutClinic from "@/components/AboutClinic";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutClinic />
      <Services />
      <Reviews />
    </main>
  );
}
