import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text?: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  children 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
        ${className}
      `}
    >
      {text || children}
    </div>
  );
};

export default AnimatedText