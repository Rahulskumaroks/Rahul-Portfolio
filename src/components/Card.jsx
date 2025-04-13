import { useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Clock, Calendar, Users, Tag } from 'lucide-react';

// Enhanced Card component that matches your Experience page styling
const Card = ({ 
  children, 
  className = '', 
  highlight = false,
  animated = true,
  delay = 0,
  hover = true
}) => {
  const [isVisible, setIsVisible] = useState(!animated);
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), 100 + delay);
      return () => clearTimeout(timer);
    }
  }, [animated, delay]);

  return (
    <div 
      className={`
        relative group overflow-hidden
        bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
        rounded-2xl border border-gray-200/50 dark:border-gray-700/50
        shadow-xl transition-all duration-500
        ${hover ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:translate-y-[-4px]' : ''}
        ${highlight ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''}
        ${animated ? 'transition-all duration-500' : ''}
        ${animated && isVisible ? 'opacity-100 translate-y-0' : animated ? 'opacity-0 translate-y-10' : ''}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Animated border effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
      
      {/* Card content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -rotate-45 translate-x-[-120%] group-hover:translate-x-[150%] transition-all duration-1000 ease-in-out"></div>
    </div>
  );
};

export default Card;




