import React from "react";



const SectionHeading = ({ title, subtitle }) => {
    return (
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
      </div>
    );
  };
  
  export default SectionHeading;