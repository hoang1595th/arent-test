type RecordProps = {
  imageUrl: string
  title: string
  buttonText: string
}

export default function Record({ imageUrl, title, buttonText }: RecordProps) {
  return (
    <div className="relative bg-[#FFCC21] p-6 w-[288px] h-[288px]">
      <div className="aspect-square bg-black/60">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="absolute inset-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold text-[#FFCC21] tracking-wide">{title}</h3>
        <div className="mt-4 px-6 py-2 bg-[#FF963C] text-white text-sm">{buttonText}</div>
      </div>
    </div>
  )
}


