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
}

export default async function hero({ params }: PageProps) {
  const { key } = await params;
  const hero: HeroType = await getHero(key);

  return (

    <>
      <section>
        <img src={hero.portrait} alt={`Portrait of ${hero.name}`} />

        <img src={hero.backgrounds?.[2]?.url} alt={`Background of ${hero.name}`} />

        <h1 className="text-4xl">{hero.name}</h1>

        <p>Role: {hero.role}</p>

        <p>Sub Role: {hero.subrole}</p>

        <p>Description: {hero.description}</p>

        <p>Location: {hero.location}</p>

        <p>Age: {hero.age}</p>

        <p>Birthday: {hero.birthday}</p>

        <h2>Hit points</h2>
        <dl>
          <dt>Health</dt>
          <dd>{hero.hitpoints.health}</dd>
          <dt>Armor</dt>
          <dd>{hero.hitpoints.armor}</dd>
          <dt>Shields</dt>
          <dd>{hero.hitpoints.shields}</dd>
          <dt>Total</dt>
          <dd>{hero.hitpoints.total}</dd>
        </dl>

        <h2>Abilities</h2>
        <div>
          {hero.abilities.map((ability) => (
            <div key={ability.name}>
              <img src={ability.icon} alt="ability icon" />
              <h3>{ability.name}</h3>
              <p>{ability.description}</p>
              <video 
                controls 
                preload="none"
                poster={ability.video?.thumbnail} 
                className="w-full max-w-2xl rounded-xl shadow-lg border border-gray-700"
              >
                <source src={ability.video?.link.webm} type="video/webm" />
                <source src={ability.video?.link.mp4} type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          ))}
        </div>
      </section>
      
    </>
  )
}