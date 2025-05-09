
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Gamepad2, Pencil, Users } from "lucide-react";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl font-black mb-6"
            >
              PIXEL<span className="text-brutalist-blue">FORGE</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-10"
            >
              The ultimate toolkit for game developers to design, storyboard, 
              and manage your game development process with ease.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Link to="/auth">
                <Button className="brutalist-button text-lg px-8 py-6">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#1EAEDB20,transparent_40%)]"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#EA384C10,transparent_30%)]"></div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="brutalist-card p-8"
            >
              <div className="rounded-full bg-brutalist-blue bg-opacity-10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Gamepad2 size={24} className="text-brutalist-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Storyboarding</h3>
              <p className="text-gray-700">
                Create interactive storyboards with our drag-and-drop interface. 
                Visualize your game's narrative and plan your scenes efficiently.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="brutalist-card p-8"
            >
              <div className="rounded-full bg-brutalist-red bg-opacity-10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Pencil size={24} className="text-brutalist-red" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Design Tools</h3>
              <p className="text-gray-700">
                Access powerful yet intuitive design tools for creating characters, 
                environments, and game UI elements with ease.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="brutalist-card p-8"
            >
              <div className="rounded-full bg-brutalist-blue bg-opacity-10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Code size={24} className="text-brutalist-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Resource Library</h3>
              <p className="text-gray-700">
                Browse and download from our extensive library of assets, templates, 
                and resources to jumpstart your game development.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="brutalist-card p-8"
            >
              <div className="rounded-full bg-brutalist-red bg-opacity-10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Users size={24} className="text-brutalist-red" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Task Management</h3>
              <p className="text-gray-700">
                Keep your game development on track with our task management system. 
                Set deadlines, track progress, and collaborate with your team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">About PixelForge</h2>
          
          <div className="brutalist-card p-10 md:p-16">
            <p className="text-lg mb-6">
              PixelForge was born from a passion for game development and the desire to 
              make the creative process more accessible to everyone, from beginners to 
              professional studios.
            </p>
            <p className="text-lg mb-6">
              Our platform combines powerful design tools with intuitive project management 
              features, allowing game developers to focus on what matters most—creating 
              amazing gaming experiences.
            </p>
            <p className="text-lg">
              Whether you're a solo indie developer or part of a larger team, PixelForge 
              provides the tools you need to bring your game ideas to life efficiently and 
              collaboratively.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
          
          <div className="brutalist-card p-10">
            <p className="text-lg mb-8">
              Have questions or feedback? We'd love to hear from you!
            </p>
            
            <Link to="/auth" className="brutalist-button inline-block mb-6">
              Create an Account
            </Link>
            
            <p className="text-gray-600 mt-8">
              For support inquiries, email us at: 
              <a href="mailto:support@pixelforge.dev" className="text-brutalist-blue font-bold ml-2">
                support@pixelforge.dev
              </a>
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 bg-brutalist-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-extrabold mb-4 md:mb-0">PIXEL<span className="text-brutalist-blue">FORGE</span></div>
          <div className="flex space-x-8">
            <a href="#features" className="hover:text-brutalist-blue transition-colors">Features</a>
            <a href="#about" className="hover:text-brutalist-blue transition-colors">About</a>
            <a href="#contact" className="hover:text-brutalist-blue transition-colors">Contact</a>
            <Link to="/auth" className="text-brutalist-blue font-bold">Sign Up</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 PixelForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
