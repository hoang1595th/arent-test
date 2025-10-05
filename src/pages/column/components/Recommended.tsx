type RecommendedProps = {
  category: string
  japaneseText: string
  className?: string
}

export default function Recommended({ category, japaneseText, className }: RecommendedProps) {
  return (
    <div className={`bg-[#2E2E2E] p-6 flex flex-col items-center text-center ${className || ''}`}>
      {/* RECOMMENDED text */}
      <div className="text-yellow-400 text-[22px]">
        RECOMMENDED
      </div>

      {/* Category text */}
      <div className="text-yellow-400 text-[22px] mb-2">
        {category}
      </div>

      {/* White underline */}
      <div className="w-[56px] h-0.5 bg-white mb-2"></div>

      {/* Japanese text */}
      <div className="text-white text-lg">
        {japaneseText}
      </div>
    </div>
  )
}
