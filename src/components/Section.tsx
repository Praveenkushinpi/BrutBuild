import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  id,
  className = '',
  titleClassName = ''
}) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {title && (
        <h2 className={`text-2xl font-bold mb-8 uppercase border-b-4 border-black pb-2 inline-block tracking-wider ${titleClassName}`}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;