import React, { ReactNode } from 'react';


const Button = ({ 
  children, 
  primary = true, 
  className = '', 
  onClick, 
  type = 'button' 
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${primary 
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
          : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;