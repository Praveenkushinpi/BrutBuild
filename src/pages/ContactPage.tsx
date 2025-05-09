import React from 'react';
import Container from '../components/Container';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">
              CONTACT US
            </h1>
            <p className="font-mono text-lg mb-8 max-w-3xl">
              Have questions about BrutBuild? Want to learn more about our platform? Get in touch with us.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
                Get In Touch
              </h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block">
                Contact Information
              </h2>
              
              <div className="space-y-6 font-mono">
                <div className="border-4 border-black p-6">
                  <h3 className="font-bold uppercase mb-2">Email</h3>
                  <p>info@brutbuild.com</p>
                </div>
                
                <div className="border-4 border-black p-6">
                  <h3 className="font-bold uppercase mb-2">Location</h3>
                  <p>123 Design District<br />San Francisco, CA 94103</p>
                </div>
                
                <div className="border-4 border-black p-6">
                  <h3 className="font-bold uppercase mb-2">Social</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://twitter.com" className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-200">TW</a>
                    <a href="https://instagram.com" className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-200">IG</a>
                    <a href="https://linkedin.com" className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-200">LI</a>
                    <a href="https://github.com" className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-200">GH</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-black text-white border-y-4 border-white">
        <Container>
          <h2 className="text-2xl font-bold mb-8 uppercase border-b-4 border-white pb-2 inline-block">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="border-4 border-white p-6">
              <h3 className="text-xl font-bold uppercase mb-2">When will BrutBuild be available?</h3>
              <p className="font-mono">BrutBuild is currently in alpha development with a planned beta release in Q2 2025. Sign up for early access on our home page.</p>
            </div>
            
            <div className="border-4 border-white p-6">
              <h3 className="text-xl font-bold uppercase mb-2">Is BrutBuild free to use?</h3>
              <p className="font-mono">BrutBuild will offer both free and premium plans. The free plan includes basic features and access to free templates. Premium plans will include advanced features, premium templates, and more.</p>
            </div>
            
            <div className="border-4 border-white p-6">
              <h3 className="text-xl font-bold uppercase mb-2">Can I export my projects?</h3>
              <p className="font-mono">Yes, BrutBuild allows you to export your projects as static sites, SPAs, or with server rendering. You can also export the code for use in your own development environment.</p>
            </div>
            
            <div className="border-4 border-white p-6">
              <h3 className="text-xl font-bold uppercase mb-2">How do I become a template creator?</h3>
              <p className="font-mono">Once you have an account, you can create and submit templates for review. Approved templates will be made available in our template library.</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;