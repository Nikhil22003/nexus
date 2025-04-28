import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <CircuitBoard className="w-6 h-6 text-white" />
      <span className="text-white font-medium tracking-wider text-lg">NexusAI</span>
    </div>
  );
};

export default Logo;