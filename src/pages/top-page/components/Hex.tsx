interface HexProps {
  icon: string;
  label: string;
}

export default function Hex({ icon, label }: HexProps) {
  return (
    <div className="relative w-[136px] h-[136px] px-2">
      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Regular hexagon shape using CSS clip-path */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400"
          style={{
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Icon */}
          <div className="mb-2 text-white text-2xl">
            {icon === 'meal' && (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                {/* Knife and Fork crossed */}
                <path d="M3 2h1v20H3V2zm2 0h1v20H5V2zm2 0h1v20H7V2zm2 0h1v20H9V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2z"/>
                <path d="M8 6h8v1H8V6zm0 2h8v1H8V8zm0 2h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/>
                {/* Fork */}
                <path d="M16 2h1v20h-1V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2zm2 0h1v20h-1V2z"/>
                <path d="M18 6h4v1h-4V6zm0 2h4v1h-4V8zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1z"/>
              </svg>
            )}
            {icon === 'coffee' && (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.38 0 2.5-1.12 2.5-2.5S19.88 3 18.5 3zM16 5v5.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8z"/>
                <path d="M4 21h16v2H4v-2z"/>
              </svg>
            )}
          </div>
          
          {/* Label */}
          <span className="text-white text-sm font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
}
