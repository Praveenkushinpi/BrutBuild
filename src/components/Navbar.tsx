import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

interface NavbarProps {
  currentPage: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#features', label: 'FEATURES' },
    { href: '#development', label: 'DEV' },
    { href: '#community', label: 'COMMUNITY' },
    { href: '#contact', label: 'CONTACT' },
    {href: '#pagesdev', label: 'PAGEDEV'}

  ];

  return (
    <nav className="border-b-4 border-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="font-bold text-xl tracking-tighter">
              BRUTBUILD
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={currentPage === item.href.replace('#', '') ? 'bg-black text-white' : ''}
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-none border-2 border-black"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-3 border-2 border-black ${
                  currentPage === item.href.replace('#', '') ? 'bg-black text-white' : ''
                }`}
                tabIndex={0}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;