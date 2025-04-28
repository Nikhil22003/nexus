import React from 'react';
import AnimatedText from './AnimatedText';
import { Building2, BookOpen, ShoppingCart, Factory, Building } from 'lucide-react';

const LogoScroll: React.FC = () => {
  const logos = [
    {
      Icon: BookOpen,
      label: "Stanford",
    },
    {
      Icon: Building2,
      label: "Mercor",
    },
    {
      Icon: ShoppingCart,
      label: "Amazon",
    },
    {
      Icon: Factory,
      label: "Phoenix Tailings",
    },
    {
      Icon: Building,
      label: "JP Morgan",
    },
  ];

  return (
    <AnimatedText delay={1700} className="w-full">
      <div className="w-full overflow-x-auto whitespace-nowrap py-8">
        <div className="flex items-center justify-center space-x-12 px-4">
          {logos.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center space-x-2 h-12 w-auto bg-white/10 rounded-lg px-6 group transition-all duration-300 hover:bg-white/20"
            >
              <Icon className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors duration-300" />
              <span className="text-white/60 text-sm font-medium group-hover:text-white/90 transition-colors duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedText>
  );
};

export default LogoScroll;