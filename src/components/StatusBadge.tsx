import React from 'react';

interface StatusBadgeProps {
  text: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-block bg-black text-white py-1 px-3 border-2 border-black font-mono text-sm ${className}`}>
      {text}
    </span>
  );
};

export default StatusBadge;