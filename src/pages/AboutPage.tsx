import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">
              ABOUT BRUTBUILD
            </h1>
            <p className="font-mono text-lg mb-8 max-w-3xl">
              BrutBuild is a platform that embraces the principles of brutalist design while making app development accessible to everyone.
            </p>
          </div>
        </Container>
      </div>

      {/* Philosophy Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 uppercase border-b-4 border-black pb-2 inline-block">
                Our Philosophy
              </h2>
              <p className="font-mono mb-4">
                BrutBuild is built on three core principles:
              </p>
              <ul className="space-y-4 font-mono">
                <li className="border-l-4 border-black pl-4">
                  <strong className="uppercase">Brutalist Design</strong>: We embrace raw, honest, and functional design that reveals rather than conceals its construction.
                </li>
                <li className="border-l-4 border-black pl-4">
                  <strong className="uppercase">Beginner-Friendly Flow</strong>: Complex capabilities packaged in an intuitive interface that anyone can use.
                </li>
                <li className="border-l-4 border-black pl-4">
                  <strong className="uppercase">Community-Driven Templates</strong>: A platform that grows through collaboration and shared expertise.
                </li>
              </ul>
            </div>
            
            <div className="border-4 border-black p-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                <div className="border-4 border-black p-4 font-mono text-center flex items-center justify-center transitions-colors duration-300 bg-white hover:bg-black text-black hover:text-white">
                  RAW
                </div>
                <div className="border-4 border-black p-4 font-mono text-center flex items-center justify-center transitions-colors duration-300 bg-white hover:bg-black text-black hover:text-white">
                  HONEST
                </div>
                <div className="border-4 border-black p-4 font-mono text-center flex items-center justify-center transitions-colors duration-300 bg-white hover:bg-black text-black hover:text-white">
                  FUNCTIONAL
                </div>
                <div className="border-4 border-black p-4 font-mono text-center flex items-center justify-center transitions-colors duration-300 bg-white hover:bg-black text-black hover:text-white">
                  BOLD
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* History Section */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-white pb-2 inline-block">
            Our Story
          </h2>
          <div className="font-mono space-y-6">
            <p>
              BrutBuild began as a response to the homogenization of web design. In a world of rounded corners and subtle gradients, we saw the need for bold, distinctive design that makes a statement.
            </p>
            <p>
              Founded in 2025, our team of designers and developers set out to create a platform that would empower users to build applications that stand out through their honesty and functionality.
            </p>
            <p>
              Today, we're building a community of brutalist enthusiasts who are challenging conventional design norms and creating digital experiences that are memorable, functional, and true to their construction.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="border-4 border-black p-6 text-center">
              <div className="w-32 h-32 mx-auto border-4 border-black mb-4 flex items-center justify-center">
                <img 
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5e801965d70f3eeda11ecd71dda6ee2298878319_praveenkushinpibrut.png"
                className="font-mono text-5xl"
                alt="Praveen Kushinpi"
                />
              </div>
              <h3 className="text-xl font-bold uppercase">Praveen Kushinpi</h3>
              <p className="font-mono mt-2">Founder</p>
            </div>
      
            
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;