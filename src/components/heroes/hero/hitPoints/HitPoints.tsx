interface Hitpoints {
    health: number;
    armor: number;
    shield: number;
    total: number;
}

export default function HitPoints({ health, armor, shield, total}: Hitpoints) {
  const Block = 25

  
  const HealthBlocks = Math.ceil(health / Block)
  const ArmorBlocks = Math.ceil(armor / Block)
  const ShieldhBlocks = Math.ceil(shield / Block)

  const HitPointsBlocks = [
    {
      "name": "Health",
      "value": HealthBlocks, 
      "totalValue": health,
      "color": "#fff"
    },
    {
      "name": "Armor",
      "value": ArmorBlocks,
      "totalValue": armor,
      "color": "#ff0"
    },
    {
      "name": "Shield",
      "totalValue": shield,
      "value": ShieldhBlocks,
      "color": "#00f"
    }
  ]

  const quantidade = HealthBlocks
  
  return (
    <div>
      <div><span className="text-lg font-bold">{total} / {total}</span></div>

      <div className="flex mb-5">
        {/*organizacao dos dados de hitpoint de personagem*/}
        {HitPointsBlocks.map((block, blockIndex) => (
          <div key={`${block.color}-${blockIndex}`} className="flex relative justify-center ">
            {block.value? 
              <div style={{color: block.color}}  className="absolute top-full mr-1 flex items-center justify-center gap-2 max-w-100%">
                <p >{block.name}</p>
                <p className="text-xs">{block.totalValue}</p>
              </div>
            : []}
            {Array.from({ length: block.value }).map((_, index) => (
                <div key={`${blockIndex}-${index}`}>
                  <div className="w-3 h-6 mr-1 rounded-xs -skew-x-12" style={{ backgroundColor: block.color }} />
                </div>
            ))}
            
          </div>
        ))}
      </div>
    </div>
  )

}