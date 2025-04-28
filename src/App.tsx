import React from 'react';
import Logo from './components/Logo';
import Button from './components/Button';
import AnimatedText from './components/AnimatedText';
import FeatureCard from './components/FeatureCard';
import LogoScroll from './components/LogoScroll';

function App() {
  const features = [
    {
      title: "Smart Line Reconfiguration",
      description: "Rebuild your production lines in hours, not months. AI-driven changeovers for speed and flexibility.",
    },
    {
      title: "Dynamic Material Substitution",
      description: "AI finds compliant, cost-effective material alternatives when supply chains break — before you even notice.",
    },
    {
      title: "Production Flow Intelligence",
      description: "Full visibility into bottlenecks. Machine learning optimizes throughput in real time.",
    },
    {
      title: "Autonomous Capacity Planning",
      description: "Always know what you can build — and how fast. Predictive models turn planning into a competitive weapon.",
    },
  ];

  return (
    <div className="min-h-screen bg-black font-['Space_Grotesk',sans-serif] flex flex-col">
      <header className="w-full p-6">
        <Logo />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-16">
            <AnimatedText 
              text="AI-Powered Transformation for Manufacturing" 
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
              delay={300}
            />
            
            <AnimatedText 
              text="Built by manufacturing leaders and early engineers at the fastest-growing companies in Silicon Valley" 
              className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light"
              delay={600}
            />
          </div>

          <LogoScroll />

          <div className="mb-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={900 + index * 200}
              />
            ))}
          </div>

          <div className="text-center">
            <AnimatedText delay={1800} className="">
              <Button>Talk to Us</Button>
            </AnimatedText>
          </div>
        </div>
      </main>

      <footer className="w-full p-6 text-gray-500 text-sm text-center">
        <AnimatedText 
          text="© 2025 NexusAI. All rights reserved." 
          delay={2000}
        />
      </footer>
    </div>
  );
}

export default App;