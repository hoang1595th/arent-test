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
    <div className="bg-[#414141] text-light p-6">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="text-sm text-gray-300 tracking-wide">MY EXERCISE</div>
          <div className="text-3xl font-bold text-light mt-1">{date}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 h-[264px] overflow-y-auto pr-2">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start justify-between border-t border-gray-500/40 py-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#FFCC21]">•</span>
                <span className="text-lg">{it.name}</span>
              </div>
              <div className="pl-5 text-[#FFCC21]">{it.kcal}kcal</div>
            </div>
            <div className="text-[#FFCC21] text-2xl whitespace-nowrap">{it.minutes} min</div>
          </div>
        ))}
      </div>
    </div>
  )
}


