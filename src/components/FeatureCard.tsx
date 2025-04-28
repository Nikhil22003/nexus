import React from 'react';
import { AnimatedText } from './AnimatedText';

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay }) => {
  return (
    <div className="mb-12 last:mb-0">
      <AnimatedText
        text={title}
        className="text-white/90 text-xl sm:text-2xl font-medium mb-3"
        delay={delay}
      />
      <AnimatedText
        text={description}
        className="text-gray-400 text-base sm:text-lg"
        delay={delay + 100}
      />
    </div>
  );
};

export default FeatureCard;