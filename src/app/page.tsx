import HeroesGrid from "@/components/apiUtilitaries/heroesGrid";
import TitleHeroSection from "@/components/heroes/hero/TitleHeroSection";
import Hero from "@/components/heroSection/Hero";

export default function Home() {

  return (
    <>
      <Hero />
      <TitleHeroSection title="Heroes"/>
      <HeroesGrid />
    </>
  )
}