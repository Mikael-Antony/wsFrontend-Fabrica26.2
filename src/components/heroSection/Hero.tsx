import HeroesCount from "../apiUtilitaries/heroesCount";

export default function Hero() {
  const image = "/Overpedia_hero_image.png";
  /*cabelho hero da pagina main*/
  return (
    <div className=" flex flex-col items-center justify-center gap-10 w-full py-10 px-5 pb-40 bg-gray-400 dark:bg-gray-950 mb-20 mask-b-from-80% mask-b-to-100%">
      <div className=" flex items-center flex-col md:flex-row justify-around gap-5 w-full h-full">
        <h1 className=" text-3xl md:text-5xl font-bold">Welcome to <span className="sm:hidden inline">OverPedia</span></h1>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className=" text-md md:text-lg">Your ultimate Overwatch hero database. </p>
          <p className=" text-sm md:text-md">Discover detailed information about your favorite heroes.</p>
        </div>

      </div>
      <img src={image} alt="Overwatch image" className="hidden sm:block bg-content opacity-90 " />
      <HeroesCount />
    </div>
  );
}