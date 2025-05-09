import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Section from '../components/Section';



const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
                BUILD BOLD.<br />
                BUILD SMART.
              </h1>
              <p className="font-mono text-lg mb-8 max-w-md">
                A brutalist no-code + pro-code platform for building bold, functional web apps with clean design and powerful functionality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#development" >
                  <Button variant="primary">Get Started</Button>
                </a>
                <a href="#community">
                <Button variant="secondary">Explore Templates</Button>
                </a>
              </div>
            </div>
            <div className="border-4 border-black p-8 text-center font-mono">
              <pre className="whitespace-pre-wrap text-left font-mono text-xs md:text-sm overflow-hidden">
{`
 ██████╗ ██████╗ ██╗   ██╗████████╗
 ██╔══██╗██╔══██╗██║   ██║╚══██╔══╝
 ██████╔╝██████╔╝██║   ██║   ██║   
 ██╔══██╗██╔══██╗██║   ██║   ██║   
 ██████╔╝██║  ██║╚██████╔╝   ██║   
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   
 ██████╗ ██╗   ██╗██╗██╗     ██████╗ 
 ██╔══██╗██║   ██║██║██║     ██╔══██╗
 ██████╔╝██║   ██║██║██║     ██║  ██║
 ██╔══██╗██║   ██║██║██║     ██║  ██║
 ██████╔╝╚██████╔╝██║███████╗██████╔╝
 ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ 
`}
              </pre>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Preview */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 uppercase inline-block border-b-4 border-black pb-2">
              Brutalism Meets Functionality
            </h2>
            <p className="font-mono max-w-2xl mx-auto">
              BrutBuild combines raw, honest design with powerful no-code + pro-code functionality to help you create distinctive web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-2 uppercase">No-Code + Pro-Code</h3>
              <p className="font-mono">Build visually or dive into the code - your choice, your workflow.</p>
            </div>

            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-2 uppercase">Easy cutomization</h3>
              <p className="font-mono">Create stunning frontened with easy customization with the help of AI</p>
            </div>
            
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-2 uppercase">Template System</h3>
              <p className="font-mono">Start with brutalist templates or create your own distinctive style.</p>
            </div>
            
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-2 uppercase">Community Driven</h3>
              <p className="font-mono">Share, collaborate, and build upon the work of other brutalist designers.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#features">
            <Button variant="primary">Explore All Features</Button>
         </a>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 uppercase border-b-4 border-white pb-2 inline-block">
              Ready to Build Bold?
            </h2>
            <p className="font-mono max-w-2xl mx-auto mb-8">
              Join the brutalist revolution. Create web applications that stand out with their honesty, functionality, and distinctive aesthetic.
            </p>
          <a href="#development">
            <Button variant="secondary" className="border-white bg-black text-black hover:bg-black hover:text-black">
              Try Now
            </Button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;