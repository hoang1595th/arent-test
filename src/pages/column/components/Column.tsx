type ColumnProps = {
  imageSrc: string
  imageAlt: string
  dateTime: string
  title: string
  hashtags: string
  className?: string
}

export default function Column({
  imageSrc,
  imageAlt,
  dateTime,
  title,
  hashtags,
  className
}: ColumnProps) {
  return (
    <div className={`relative ${className || ''}`}>
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />

        {/* Date/Time banner overlay */}
        <div className="absolute bottom-0 left-0 bg-primary-600 w-[144px] h-6 pl-2">
          <span className="text-white text-xs font-medium">{dateTime}</span>
        </div>
      </div>

      {/* Content below image */}
      <div className="mt-2">
        {/* Title */}
        <h3 className="text-sm text-dark-400 leading-tight mb-1">
          {title}
        </h3>

        {/* Hashtags */}
        <p className="text-xs text-[#FF963C]">
          {hashtags}
        </p>
      </div>
    </div>
  )
}
