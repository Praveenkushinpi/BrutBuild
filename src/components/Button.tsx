import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = "font-mono font-bold py-3 px-6 border-4 uppercase tracking-wider transition-colors duration-200";
  
  const variantClasses = {
    primary: "border-black bg-black text-white hover:bg-white hover:text-black",
    secondary: "border-black bg-white text-black hover:bg-black hover:text-white"
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;