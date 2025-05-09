import React from 'react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-4 border-black py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">BrutBuild</h3>
            <p className="font-mono">Build Bold. Build Smart.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/development">Development</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Connect</h3>
            <p className="font-mono mb-2">Follow us for updates</p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="border-2 border-black p-2">TW</Link>
              <Link href="https://github.com" className="border-2 border-black p-2">GH</Link>
              <Link href="https://discord.com" className="border-2 border-black p-2">DC</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-2 border-black text-center">
          <p className="font-mono">&copy; {new Date().getFullYear()} BrutBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;