
export default function TitleHero({title}:{title:string}) {
  
  return (
    <div className="text-3xl font-extrabold bg-orange-400 px-10 text-gray-950 -skew-x-12 w-6xl py-2">
      <h2 className="skew-x-12 ">{title}</h2>
    </div>
  )
}