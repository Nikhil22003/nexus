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
    <div className="min-h-screen antialiased bg-black font-sans flex flex-col">
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

          {/* Our Services Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <AnimatedText
                text="Our AI Integration Services"
                className="text-white font-bold text-3xl sm:text-4xl mb-4"
                delay={1200}
              />
              <AnimatedText
                text="End-to-end solutions tailored to your needs"
                className="text-gray-300 text-lg"
                delay={1400}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <AnimatedText text="Custom Model Development" className="text-white/90 text-xl font-medium mb-2" delay={1600} />
                <AnimatedText text="Leverage domain-specific datasets to build models that solve your unique challenges." className="text-gray-400 text-base" delay={1700} />
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <AnimatedText text="Data Pipeline Integration" className="text-white/90 text-xl font-medium mb-2" delay={1800} />
                <AnimatedText text="Seamlessly connect your data sources for real-time insights and decision making." className="text-gray-400 text-base" delay={1900} />
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <AnimatedText text="Cloud Deployment & Scaling" className="text-white/90 text-xl font-medium mb-2" delay={2000} />
                <AnimatedText text="Deploy AI workloads on the cloud with scalable architecture and low latency." className="text-gray-400 text-base" delay={2100} />
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <AnimatedText text="Monitoring & Maintenance" className="text-white/90 text-xl font-medium mb-2" delay={2200} />
                <AnimatedText text="Stay ahead with continuous model monitoring, updates, and support." className="text-gray-400 text-base" delay={2300} />
              </div>
            </div>
          </section>

          {/* Our Process Section */}
          <section className="mb-16 bg-gray-900 rounded-lg px-6 py-10">
            <div className="text-center mb-8">
              <AnimatedText
                text="Our 3-Step Integration Process"
                className="text-white font-bold text-3xl sm:text-4xl mb-4"
                delay={2400}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="flex-1 text-center">
                <div className="text-white/80 text-lg font-semibold mb-2">1. Discover</div>
                <div className="text-gray-400">We analyze your business needs and identify AI opportunities.</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-white/80 text-lg font-semibold mb-2">2. Build</div>
                <div className="text-gray-400">Our team develops and tests custom AI models and integrations.</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-white/80 text-lg font-semibold mb-2">3. Scale</div>
                <div className="text-gray-400">We deploy, monitor, and optimize at scale to ensure performance.</div>
              </div>
            </div>
          </section>

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
              <a href="mailto:reachnikhilsuresh@gmail.com?subject=Talk%20to%20Us">
                <Button>Talk to Us</Button>
              </a>
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