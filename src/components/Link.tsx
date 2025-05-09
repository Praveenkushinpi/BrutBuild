import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', tabIndex }) => {
  const baseClasses = "hover:bg-black hover:text-white transition-colors duration-200 font-mono tracking-wide px-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2";
  
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${className}`}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
};