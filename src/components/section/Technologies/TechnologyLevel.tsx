interface TechnologyLevelProps {
  level: number
}

const MAX_LEVEL = 5

const TechnologyLevel = ({ level }: TechnologyLevelProps) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Nivel
        </span>

        <span className="text-sm font-semibold text-indigo-400">
          {level}/{MAX_LEVEL}
        </span>
      </div>

      <div className="flex gap-1">
        {Array.from({ length: MAX_LEVEL }).map((_, index) => (
          <div
            key={index}
            className={`
              h-2
              flex-1
              rounded-full
              transition-all
              duration-500
              ${
                index < level
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "bg-slate-700"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default TechnologyLevel