import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: "No-Code + Pro-Code Flow",
      description: "Build visually with our no-code interface or dive into the code when you need more control.",
      icon: "[ ]"
    },
    {
      title: "Template System",
      description: "Start with our brutalist templates or create your own unique design system.",
      icon: "{ }"
    },
    {
      title: "Supabase Integration",
      description: "Connect your app to a powerful database with just a few clicks.",
      icon: "{ }"
    },
    {
      title: "Tech Stack Support",
      description: "Build with React, Vue, Svelte, or plain HTML/CSS/JS.",
      icon: "</>"
    },
    {
      title: "Community Uploads",
      description: "Share your templates with the community or use templates created by others.",
      icon: "^"
    },
    {
      title: "Responsive Design",
      description: "All templates and components are fully responsive and work on all devices.",
      icon: "[]"
    },
    {
      title: "Dark Mode Support",
      description: "Built-in support for light and dark modes in all templates.",
      icon: "◐"
    },
    {
      title: "Export Options",
      description: "Export your project as a static site, SPA, or with server rendering.",
      icon: "→"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">
              FEATURES
            </h1>
            <p className="font-mono text-lg mb-8 max-w-3xl">
              BrutBuild combines powerful features with brutalist design principles to help you create distinctive web applications.
            </p>
          </div>
        </Container>
      </div>

      {/* Features Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Details */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-white pb-2 inline-block">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Frontend Options</h3>
              <ul className="space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="mr-2">→</span> React
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Vue.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Svelte
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Angular
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Vanilla HTML/CSS/JS
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Backend Options</h3>
              <ul className="space-y-2 font-mono">
                <li className="flex items-center">
                  <span className="mr-2">→</span> Supabase
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Firebase
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> REST API
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> GraphQL
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span> Serverless Functions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 border-4 border-white font-mono">
            <p className="mb-4">BrutBuild uses a component-based architecture that allows you to:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">1.</span> Create reusable components that can be shared across projects
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span> Customize components with your own styling and functionality
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span> Export components as code that can be used in any project
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span> Import external components from popular libraries
              </li>
            </ul>
           
          </div>
          <p className="mt-4"> * We are still working on Backened Options but stay tuned for more updates.</p>
        </Container>
      </Section>

      {/* Feature Comparison */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black font-mono">
              <thead>
                <tr>
                  <th className="border-4 border-black p-4 text-left">Feature</th>
                  <th className="border-4 border-black p-4 text-center">BrutBuild</th>
                  <th className="border-4 border-black p-4 text-center">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-4 border-black p-4">Brutalist Design</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                  <td className="border-4 border-black p-4 text-center">✗</td>
                </tr>
                <tr>
                  <td className="border-4 border-black p-4">No-Code Interface</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border-4 border-black p-4">Pro-Code Access</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                  <td className="border-4 border-black p-4 text-center">Limited</td>
                </tr>
                <tr>
                  <td className="border-4 border-black p-4">Community Templates</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                  <td className="border-4 border-black p-4 text-center">Limited</td>
                </tr>
                <tr>
                  <td className="border-4 border-black p-4">Full Export Options</td>
                  <td className="border-4 border-black p-4 text-center">✓</td>
                  <td className="border-4 border-black p-4 text-center">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FeaturesPage;