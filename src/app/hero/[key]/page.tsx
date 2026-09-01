import HitPoints from "@/components/heroes/hero/hitPoints/HitPoints";
import TitleHero from "@/components/heroes/hero/TitleHeroSection";
import { getHero } from "@/services/getHero";

interface PageProps {
  params: Promise<{ key: string }>;
}

interface Ability {
  name: string;
  description: string;
  icon: string;
  video?: {
    thumbnail: string;
    link: {
      mp4: string;
      webm: string;
    };
  };
}
interface Perk {
  name: string;
  description: string;
  icon: string;
};

interface StadiumPower {
  name: string;
  description: string;
  icon: string;
};

interface Story {
  summary: string;
  media?: {
    type: string;
    link: string;
  };
  chapters: {
    title: string;
    picture: string;
    content: string;
  }[];
}

interface HeroType {
  name: string;
  role: string;
  subrole: string;
  description: string;
  location: string;
  age: number;
  birthday: string;
  portrait: string;
  backgrounds: { url: string }[];
  hitpoints: {
    health: number;
    armor: number;
    shields: number;
    total: number;
  };
  abilities: Ability[];
  perks: {
    minor: Perk[];
    major: Perk[];
  };
  stadium_powers?: StadiumPower[];
  story: Story;
}

export default async function hero({ params }: PageProps) {
  const { key } = await params;
  const hero: HeroType = await getHero(key);


  return (

    <>
      <section className="flex flex-col justify-center gap-20 items-center overflow-hidden w-full">

        <section className="text-zinc-300 mask-b-from-75% mask-b-to-100% h-150 bg-cover bg-fixed xl:bg-right bg-position-[75%_50%] w-full" style={{ backgroundImage: `url(${hero.backgrounds?.[2]?.url})` }}>
          <div className="flex justify-between w-full h-full overflow-hidden " >

            <div className="m-10 flex flex-col justify-between pb-20">
              <div className="mb-5 flex flex-col items-center w-fit">
                <h1 className="text-6xl font-bold text-orange-400">{hero.name}</h1>

                <p className="font-semibold">{hero.role} | {hero.subrole}</p>
              </div>

              <p className="md:text-2xl text-xl text-justify w-[80%] text-zinc-200">{hero.description}</p>

              <ul className=" text-sm text-zinc-400">
                <li><span className=" font-semibold">Location:</span> {hero.location}</li>
                <li><span className=" font-semibold">Birthday:</span> {hero.birthday}</li>
                <li><span className=" font-semibold">Age:</span> {hero.age}</li>
              </ul>
            </div>

            <img src={hero.portrait} alt={`Portrait of ${hero.name}`} className="h-full opacity-75 hover:opacity-100 hover:pr-20 hover:pb-20 hover:scale-150 duration-500 ease-in-out mask-x-from-95% mask-x-to-100% bg-fixed hidden xl:block" />
          </div>
        </section>

        <section className="flex justify-center items-center flex-col gap-5 md:gap-20 md:flex-row m-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Hit points:</h2>

          <HitPoints health={hero.hitpoints.health} armor={hero.hitpoints.armor} shield={hero.hitpoints.shields} total={hero.hitpoints.total} />
        </section>


        <TitleHero title="Story" />
        <section className="flex flex-col items-center gap-10 scale-90 sm:scale-100">
          <h3 className="text-3xl text-orange-400 font-bold">sumary</h3>
          <div className="flex items-center justify-center gap-5 snap-center flex-col lg:flex-row">
            {
              /* decompoe o link que a api manda e cria um link para um iframe de video */
              (() => {
                const videoId = hero.story.media?.link.split("/").pop()?.split("?")[0];
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                return (
                  <iframe
                    src={embedUrl}
                    title="Hero Story Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-[80%] h-75 md:w-125 md:h-75 rounded-lg shadow-xl shadow-zinc-500/50"
                  />
                );
              })()}

            <p className="w-[80%] max-w-lg m-5 indent-8 ">{hero.story.summary}</p>
          </div>

          <h4 className="text-2xl text-orange-400 font-bold">Chapters</h4>
          {hero.story.chapters?.map((chapter) => (
            <div key={chapter.title} className="group flex flex-col gap-40 p-10  w-screen h-screen overflow-hidden lg:grayscale hover:grayscale-0 duration-500 ease-in-out bg-cover bg-position-[center_top] mask-y-from-80% mask-y-to-100%" style={{ backgroundImage: `url(${chapter.picture})` }}>
                <h5 className="text-2xl text-orange-400 font-bold bg-gray-950/50 py-2 px-4 hover:bg-gray-900 duration-500 ease-in-out size-fit">{chapter.title}</h5>
                <p className="bg-gray-950/50 py-2 px-4 hover:bg-gray-950 lg:opacity-0 group-hover:opacity-100 duration-500 ease-in-out indent-8 m-auto max-w-6xl">{chapter.content}</p>
            </div>
          ))}

        </section>

        <TitleHero title="Ability" />
        <section className="flex flex-col gap-10 max-w-6xl">
          <div className="flex flex-col justify-center items-center gap-10">
            {hero.abilities.map((ability) => (
              <div key={ability.name} className="flex justify-between gap-5 items-center bg-zinc-400 dark:bg-zinc-950 p-5 rounded-xl  hover:zoom-150 duration-500 ease-in-out w-fit">
                <div className="flex flex-col justify-center items-center gap-5">
                  <h3 className="text-2xl font-bold">{ability.name}</h3>
                  <img src={ability.icon} alt="ability icon" />
                  <p className="w-75 dark:text-zinc-400 text-zinc-700">{ability.description}</p>
                </div>
                <video controls controlsList="nodownload" preload="none" poster={ability.video?.thumbnail} className="max-h-50">
                  <source src={ability.video?.link.webm} type="video/webm" />
                  <source src={ability.video?.link.mp4} type="video/mp4" />
                  <p>Seu navegador não suporta a reprodução deste vídeo.</p>
                </video>
              </div>
            ))}
          </div>
        </section>

        <TitleHero title="Perks" />
        <section className="flex justify-center items-center gap-20">
          <div className="flex flex-col gap-10">
            <h3 className="text-3xl text-orange-400 font-bold">major</h3>
            <div className="flex flex-col gap-5">
              {hero.perks?.major.map((perk) => (
                <div key={perk.name} className="flex gap-2 dark:bg-zinc-950 bg-zinc-400 p-2 w-fit rounded-xl hover:scale-150 hover:z-1 duration-500 ease-in-out">
                  <img src={perk.icon} alt={`perk ${perk.name}`} className="bg-black rounded-xl size-50 p-2" />
                  <div>
                    <h4 className="text-2xl font-bold">{perk.name}</h4>
                    <p className="w-50 dark:text-gray-400 text-zinc-700 ">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-px rounded-4xl h-100 bg-orange-400" />

          <div className="flex flex-col gap-10">
            <h3 className="text-3xl text-orange-400 font-bold">minor</h3>
            <div className="flex flex-col gap-5">
              {hero.perks?.minor.map((perk) => (
                <div key={perk.name} className="flex gap-2 dark:bg-zinc-950 bg-zinc-400 p-2 w-fit rounded-xl hover:scale-150 hover:z-1 duration-500 ease-in-out">
                  <img src={perk.icon} alt={`perk ${perk.name}`} className="bg-black rounded-xl size-50 p-2" />
                  <div>
                    <h4 className="text-2xl font-bold">{perk.name}</h4>
                    <p className="w-50 dark:text-gray-400 text-zinc-700 ">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {hero.stadium_powers && hero.stadium_powers.length > 0 && (
          <>
            <TitleHero title="Stadium Powers" />
            <section className="grid grid-cols-4 gap-5 items-end">
              {hero.stadium_powers.map((stadiumpower) => (
                <div key={stadiumpower.name} className="flex flex-col justify-start gap-5 items-center bg-zinc-400 dark:bg-zinc-950 rounded-xl w-60 h-115 p-5 hover:scale-110 duration-500 ease-in-out ">
                  <img src={stadiumpower.icon} alt={`${stadiumpower.name} stadium power`} className="w-60" />
                  <h4 className="text-2xl font-bold ">{stadiumpower.name}</h4>
                  <p className="w-50 text-sm text-zinc-700 dark:text-zinc-400">{stadiumpower.description}</p>
                </div>
              ))}
            </section>
          </>
        )}

      </section>
    </>
  )
}