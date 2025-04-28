import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-4 text-sm font-medium tracking-wider uppercase
        bg-transparent border border-white/80 text-white
        transition-all duration-300 ease-in-out
        hover:bg-white hover:text-black
        focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;