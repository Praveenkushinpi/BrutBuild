import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, tags }) => {
  return (
    <div className="border-4 border-black p-6 h-full">
      {icon && <div className="text-2xl mb-4 font-mono">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
      <p className="font-mono">{description}</p>
      <p className="font-mono">{tags}</p>
    </div>
  );
};

export default FeatureCard;