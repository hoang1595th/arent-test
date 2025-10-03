interface PhotoProps {
  imageSrc: string;
  imageAlt: string;
  label: string;
}

export default function Photo({ imageSrc, imageAlt, label }: PhotoProps) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
      <img 
        src={imageSrc} 
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-yellow-400 px-2 py-1">
        <span className="text-white text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
