import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import Button from '../components/Button';

const CommunityPage: React.FC = () => {
  const templates = [
    { 
      name: "Minimal Portfolio", 
      author: "Alex Kim", 
      type: "Free",
      downloads: 2.4
    },
    { 
      name: "Brutalist Blog", 
      author: "Jordan Lee", 
      type: "Premium",
      downloads: 1.8
    },
    { 
      name: "Raw Commerce", 
      author: "Taylor Moore", 
      type: "Premium",
      downloads: 3.1
    },
    { 
      name: "Grid Dashboard", 
      author: "Casey Wong", 
      type: "Free",
      downloads: 4.5
    }
  ];

  const featuredUsers = [
    {
      name: "Studio Concrete",
      role: "Design Agency",
      projects: 12
    },
    {
      name: "Digital Brutalism",
      role: "Developer Collective",
      projects: 8
    },
    {
      name: "Raw Interface",
      role: "UI/UX Studio",
      projects: 15
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">
              COMMUNITY
            </h1>
            <p className="font-mono text-lg mb-8 max-w-3xl">
              Join a growing community of brutalist designers and developers sharing templates, ideas, and inspiration.
            </p>
          </div>
        </Container>
      </div>

      {/* Templates Section */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Popular Templates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="border-4 border-black">
                <div className="aspect-video bg-gray-100 border-b-4 border-black flex items-center justify-center">
                  <span className="font-mono text-3xl">{index + 1}</span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{template.name}</h3>
                    <span className={`font-mono text-xs px-2 py-1 ${template.type === 'Premium' ? 'bg-black text-white' : 'border-2 border-black'}`}>
                      {template.type}
                    </span>
                  </div>
                  <p className="font-mono text-sm mb-2">By {template.author}</p>
                  <p className="font-mono text-sm">{template.downloads}k downloads</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="primary">Browse All Templates</Button>
          </div>
        </Container>
      </Section>

      {/* Upload Section */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 uppercase border-b-4 border-white pb-2 inline-block">
                Share Your Templates
              </h2>
              <p className="font-mono mb-6">
                Create and share your own brutalist templates with the community. Earn recognition and even monetize your work through our premium template marketplace.
              </p>
              <Button variant="secondary" className="border-white bg-black text-white hover:bg-white hover:text-black">
                Upload Template
              </Button>
            </div>
            
            <div className="border-4 border-white p-8">
              <div className="space-y-4 font-mono">
                <p className="mb-4">Template requirements:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">→</span> Follow brutalist design principles
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span> Include responsive layouts
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span> Document components and usage
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span> Optimize for performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Users */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Featured Users
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredUsers.map((user, index) => (
              <div key={index} className="border-4 border-black p-6">
                <div className="w-24 h-24 border-4 border-black mb-4 flex items-center justify-center mx-auto">
                  <span className="font-mono text-2xl">{user.name.charAt(0)}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold uppercase">{user.name}</h3>
                  <p className="font-mono">{user.role}</p>
                  <p className="font-mono mt-2">{user.projects} projects</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Community Stats */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-white pb-2 inline-block">
            Community Stats
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-4 border-white p-6">
              <span className="block font-mono text-4xl mb-2">450+</span>
              <span className="font-mono">Active Users</span>
            </div>
            
            <div className="border-4 border-white p-6">
              <span className="block font-mono text-4xl mb-2">120+</span>
              <span className="font-mono">Templates</span>
            </div>
            
            <div className="border-4 border-white p-6">
              <span className="block font-mono text-4xl mb-2">2.5k+</span>
              <span className="font-mono">Downloads</span>
            </div>
            
            <div className="border-4 border-white p-6">
              <span className="block font-mono text-4xl mb-2">15+</span>
              <span className="font-mono">Countries</span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CommunityPage;