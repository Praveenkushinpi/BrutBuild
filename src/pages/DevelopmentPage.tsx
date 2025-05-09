import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import StatusBadge from '../components/StatusBadge';

const DevelopmentPage: React.FC = () => {
  const techStack = [
    { name: "React Native", description: "Cross-platform mobile app development" },
    { name: "Expo", description: "Simplified React Native development" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "Supabase", description: "Open source Firebase alternative" },
    { name: "Nativewind", description: "Tailwind CSS for React Native" },
    { name: "Zustand", description: "Lightweight state management" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight flex items-center">
              DEVELOPMENT
              <StatusBadge text="UNDER DEVELOPMENT" className="ml-4" />
            </h1>
            <p className="font-mono text-lg mb-8 max-w-3xl">
              BrutBuild is currently in active development. Follow our progress and learn about the technologies we're using.
            </p>
          </div>
        </Container>
      </div>

      {/* Tech Stack */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="border-4 border-black p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">{tech.name}</h3>
                <p className="font-mono">{tech.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Development Timeline */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-white pb-2 inline-block">
            Development Timeline
          </h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-lg border-4 border-white p-3 text-center">
                  Q1 2025
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 border-4 border-white p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">Alpha Launch</h3>
                <p className="font-mono">Initial platform development with core features and limited template selection.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-lg border-4 border-white p-3 text-center">
                  Q2 2025
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 border-4 border-white p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">Beta Release</h3>
                <p className="font-mono">Expanded template library, community features, and improved editor experience.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-lg border-4 border-white p-3 text-center">
                  Q3 2025
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 border-4 border-white p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">Public Launch</h3>
                <p className="font-mono">Full feature set, extensive template library, and marketplace for premium templates.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-lg border-4 border-white p-3 text-center">
                  Q4 2025
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 border-4 border-white p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">Enterprise Features</h3>
                <p className="font-mono">Team collaboration, advanced access controls, and enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Current Status */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Current Status
          </h2>
          
          <div className="border-4 border-black p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h3 className="text-xl font-bold uppercase">Development Progress</h3>
              <StatusBadge text="ALPHA PHASE" />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-mono">Core Architecture</span>
                  <span className="font-mono">85%</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-black h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-mono">UI Components</span>
                  <span className="font-mono">70%</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-black h-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-mono">Template System</span>
                  <span className="font-mono">60%</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-black h-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-mono">Backend Integration</span>
                  <span className="font-mono">50%</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-black h-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 border-4 border-black font-mono text-center">
              <p>Next milestone: Beta release in Q2 2025</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default DevelopmentPage;