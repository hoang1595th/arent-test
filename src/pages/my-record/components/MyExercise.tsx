type ExerciseItem = {
  name: string
  kcal: number
  minutes: number
}

type MyExerciseProps = {
  date: string
  items: ExerciseItem[]
}

export default function MyExercise({ date, items }: MyExerciseProps) {
  return (
    <div className="bg-[#414141] text-light px-6 py-4 h-[264px]">
      <div className="flex items-start gap-4 mb-1">
        <div className="text-sm w-20 tracking-wide">MY EXERCISE</div>
        <div className="text-2xl">{date}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 overflow-y-auto pr-2 h-[192px]">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start justify-between border-b border-gray-500/40 h-10">
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="text-white">•</span>
                <span className="text-sm leading-none">{it.name}</span>
              </div>
              <div className="pl-4 text-[#FFCC21] text-sm leading-none">{it.kcal}kcal</div>
            </div>
            <div className="text-[#FFCC21] text-lg whitespace-nowrap">{it.minutes} min</div>
          </div>
        ))}
      </div>
    </div>
  )
}
