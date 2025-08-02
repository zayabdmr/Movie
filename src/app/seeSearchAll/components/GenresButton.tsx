import { ChevronRight, X } from "lucide-react";
import React, { useState } from "react";

type GenresButtonProps = {
  onClick: () => void;
  children: string;
};

const GenresButton: React.FC<GenresButtonProps> = ({ onClick, children }) => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
    onClick();
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center justify-center gap-1 px-3 py-1 rounded-full border text-sm font-semibold transition-colors duration-200
        ${isActive ? "bg-white text-black" : "bg-black text-white"} 
        border-[#E4E4E7] hover:opacity-90`}
    >
      {children}
      {isActive ? (
        <ChevronRight className="w-4 h-4" />
      ) : (
        <X className="w-4 h-4" />
      )}
    </button>
  );
};

export default GenresButton;
