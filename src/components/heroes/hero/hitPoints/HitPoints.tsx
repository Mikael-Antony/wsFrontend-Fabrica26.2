interface Hitpoints {
  health: number;
  armor: number;
  shield: number;
  total: number;
}

export default function HitPoints({ health, armor, shield, total }: Hitpoints) {
  const Block = 25;

  const HealthBlocks = Math.ceil(health / Block);
  const ArmorBlocks = Math.ceil(armor / Block);
  const ShieldhBlocks = Math.ceil(shield / Block);

  const HitPointsBlocks = [
    {
      name: "Health",
      value: HealthBlocks,
      totalValue: health,
      color: "#fff",
    },
    {
      name: "Armor",
      value: ArmorBlocks,
      totalValue: armor,
      color: "#ff0",
    },
    {
      name: "Shield",
      totalValue: shield,
      value: ShieldhBlocks,
      color: "#00f",
    },
  ];

  const getCellValue = (block: { totalValue: number }, index: number) => {
    const remaining = block.totalValue - index * Block;
    return Math.max(0, Math.min(Block, remaining));
  };

  return (
    <div>
      <div><span className="text-lg font-bold text-gray-100">{total} / {total}</span></div>

      <div className="flex mb-5">
        {HitPointsBlocks.map((block, blockIndex) => (
          <div key={`${block.color}-${blockIndex}`} className="flex relative justify-center">
            {block.value ? (
              <div style={{ color: block.color }} className="absolute top-full mr-1 flex items-center justify-center gap-2 max-w-full">
                <p>{block.name}</p>
                <p className="text-xs">{block.totalValue}</p>
              </div>
            ) : null}

            {Array.from({ length: block.value }).map((_, index) => {
              const cellValue = getCellValue(block, index);

              return (
                <div key={`${blockIndex}-${index}`} className="group relative flex items-center">
                  <div
                    className="w-3 h-6 mr-1 rounded-xs -skew-x-12 hover:scale-200 duration-150 ease-in-out"
                    style={{ backgroundColor: block.color }}
                    title={`${block.name}: ${cellValue}`}
                  >
                    <span className="pointer-events-none flex justify-center items-center text-black h-full opacity-0 transition group-hover:opacity-100 group-hover:z-1 text-[10px]">
                      {cellValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}