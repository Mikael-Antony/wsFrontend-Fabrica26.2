
export default function TitleHero({ title }: { title: string }) {
  /*
    componente para os titulos nas paginas individuais 
  */
  return (
    <div className="text-3xl font-extrabold bg-orange-400 px-10 dark:text-gray-950 text-gray-50 -skew-x-12 w-[80%] max-w-6xl py-2">
      <h2 className="skew-x-12 ">{title}</h2>
    </div>
  )
}