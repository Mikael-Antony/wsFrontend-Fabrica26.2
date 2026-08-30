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
  media?:{
    type: string;
    link: string;
  };
  chapters:{
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
      <section className="flex flex-col justify-center gap-20 items-center">

        <section className="relative overflow-hidden text-gray-300 mask-b-from-75% mask-b-to-100%">
          <img src={hero.backgrounds?.[2]?.url} alt={`Background of ${hero.name}`} />
          <div className="flex justify-between absolute top-0 w-full h-full">

            <div className="m-10 flex flex-col justify-between ">
              <div className="mb-5 flex flex-col items-center w-fit">
                <h1 className="text-6xl font-bold text-orange-400">{hero.name}</h1>

                <p className="font-semibold">{hero.role} | {hero.subrole}</p>
              </div>

              <p className="text-2xl w-[80%] text-gray-200">{hero.description}</p>

              <ul className=" text-sm">
                <li><span className=" font-semibold">Location:</span> {hero.location}</li>
                <li><span className=" font-semibold">Birthday:</span> {hero.birthday}</li>
                <li><span className=" font-semibold">Age:</span> {hero.age}</li>
              </ul>
            </div>

            <img src={hero.portrait} alt={`Portrait of ${hero.name}`} className="h-full opacity-75 hover:opacity-100 hover:pr-10 hover:pb-10 hover:scale-150 duration-500 ease-in-out mask-x-from-95% mask-x-to-100%" />
          </div>
        </section>

        <section className="flex justify-center items-center gap-20 m-10 ">
          <h2 className="text-3xl font-bold">Hit points:</h2>

          <HitPoints health={hero.hitpoints.health} armor={hero.hitpoints.armor} shield={hero.hitpoints.shields} total={hero.hitpoints.total}/>
        </section>

        <TitleHero title="Ability"/>
        <section className="flex flex-col gap-10 max-w-6xl">
          <div className="flex flex-col justify-center items-center gap-10">
            {hero.abilities.map((ability) => (
              <div key={ability.name} className="flex justify-between gap-5 items-center bg-gray-700 p-5 rounded-xl  hover:zoom-150 duration-500 ease-in-out w-fit">
                <div className="flex flex-col justify-center items-center gap-5">
                  <h3 className="text-2xl font-bold">{ability.name}</h3>
                  <img src={ability.icon} alt="ability icon" />
                  <p className="w-75">{ability.description}</p>
                </div>
                <video controls preload="none" poster={ability.video?.thumbnail} className="max-h-50">
                  <source src={ability.video?.link.webm} type="video/webm" />
                  <source src={ability.video?.link.mp4} type="video/mp4" />
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
              </div>
            ))}
          </div>
        </section>

        <TitleHero title="Perks"/>
        <section className="flex justify-center items-center gap-20">
          <div className="flex flex-col gap-10">
            <h3 className="text-3xl text-orange-400 font-bold">major</h3>
            <div className="flex flex-col gap-5">
              {hero.perks?.major.map((perk) => (
                <div key={perk.name} className="flex gap-2 bg-gray-600 p-2 w-fit rounded-xl hover:zoom-150 duration-500 ease-in-out">
                  <img src={perk.icon} alt={`perk ${perk.name}`} className="bg-black rounded-xl size-50 p-2" />
                  <div>
                    <h4 className="text-2xl font-bold">{perk.name}</h4>
                    <p className="w-50 text-gray-400">{perk.description}</p>
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
                <div key={perk.name} className="flex gap-2 bg-gray-600 p-2 w-fit rounded-xl hover:zoom-150 duration-500 ease-in-out">
                  <img src={perk.icon} alt={`perk ${perk.name}`} className="bg-black rounded-xl size-50 p-2" />
                  <div>
                    <h4 className="text-2xl font-bold">{perk.name}</h4>
                    <p className="w-50 text-gray-400">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TitleHero title="Stadium Powers"/>
        <section className="grid grid-cols-4 gap-5 items-end">
          {hero.stadium_powers?.map((stadiumpower) => (
            <div key={stadiumpower.name} className="flex flex-col justify-start gap-5 items-center bg-gray-600 rounded-xl w-60 h-115 p-5">
              <img src={stadiumpower.icon} alt={`${stadiumpower.name} stadium power`} className="w-60" />
              <h4 className="text-2xl font-bold text-orange-400 ">{stadiumpower.name}</h4>
              <p className="w-50 text-sm">{stadiumpower.description}</p>
            </div>
          ))}
        </section>

        <TitleHero title="Story"/>
        <section className="flex flex-col items-center gap-10 ">
          <h3 className="text-3xl text-orange-400 font-bold">sumary</h3>
          <div className="flex gap-5 snap-center">
            {(() => {
              const videoId = hero.story.media?.link.split("/").pop()?.split("?")[0];
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;

              return (
                <iframe
                  src={embedUrl}
                  title="Hero Story Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="zoom-150"
                />
              );
            })()}

            <p className="w-lg">{hero.story.summary}</p>
          </div>

          <h4 className="text-2xl text-orange-400 font-bold">Chapters</h4>
          {hero.story.chapters?.map((chapter) => (
            <div key={chapter.title} className="relative h-150 overflow-hidden ">
              <img src={chapter.picture} alt={`chapter ${chapter.title} image`} className="w-screen bg-cover "/>
              <div className="absolute top-0 p-10 flex flex-col justify-between size-full">
                <h5 className="text-2xl text-orange-400 font-bold bg-gray-900/50 py-2 px-4 hover:bg-gray-900 duration-500 ease-in-out size-fit">{chapter.title}</h5> 
                <p className="bg-gray-900/50 py-2 px-4 hover:bg-gray-900 duration-500 ease-in-out">{chapter.content}</p>
              </div>
            </div>
          ))}

        </section>
      </section>
    </>
  )
}