type MainPhotoProps = {
  imageSrc: string
  imageAlt: string
  className?: string
  number?: number
  total?: number
  percentage?: number // 0-100
}

export default function MainPhoto({ imageSrc, imageAlt, className, number = 5, total = 21, percentage = 75 }: MainPhotoProps) {
  const containerClass = `relative w-full overflow-hidden bg-white shadow-sm ${
    className ? className : ''
  }`
  const safePercent = Math.min(100, Math.max(0, percentage))
  const paddedNumber = String(number).padStart(2, '0')
  const dateLike = `${paddedNumber}/${total}`

  return (
    <div className={containerClass}>
      <div className="w-full aspect-[3/2] md:aspect-[16/9]">
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      {/* Progress circle overlay: 181x181, rounded full, white 2px stroke showing by percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[181px] h-[181px] rounded-full">
          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
            {(() => {
              const radius = 49 // leave 2px stroke fully visible within 100x100
              const circumference = 2 * Math.PI * radius
              const dash = (safePercent / 100) * circumference
              const gap = Math.max(0, circumference - dash)
              return (
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${gap}`}
                />
              )
            })()}
          </svg>
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 px-2 py-1 text-white shadow">
              <span className="text-xs md:text-lg">{dateLike}</span>
              <span className="text-lg md:text-2xl">{Math.round(safePercent)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
