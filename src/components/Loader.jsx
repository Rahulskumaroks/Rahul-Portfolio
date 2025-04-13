import React, { useState, useEffect } from 'react';

const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white font-mono">Loading...</h2>
          <p className="text-gray-400 mt-2">Rahul Kumar • Developer</p>
        </div>
      </div>
    );
  };
  
  export default Loader;