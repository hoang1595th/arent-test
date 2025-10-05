interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-bl from-orange-400 to-yellow-400 text-white px-16 py-4 rounded-lg font-medium hover:from-orange-500 hover:to-yellow-500 transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
