import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink,Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile from '../assets/boy.png';
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'React Native', color: 'bg-purple-500' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'Java', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-64 -left-32 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-96 -right-32 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-64 left-32 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Floating shapes */}
      <div className="hidden md:block absolute top-20 right-32 w-12 h-12 bg-blue-400 dark:bg-blue-600 rounded-lg rotate-12 animate-float"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-8 h-8 bg-pink-400 dark:bg-pink-600 rounded-full animate-float animation-delay-2000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400 dark:bg-yellow-600 rounded-md rotate-45 animate-float animation-delay-4000"></div>
      
      {/* Social links */}
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        {/* <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
          <GitHub size={20} />
        </a> */}
        <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
          <Linkedin size={20} />
        </a>
        {/* <a href="#" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
          <Twitter size={20} />
        </a> */}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left side content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4 inline-block animate-fadeIn">
                Available for work
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Hello, I'm <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Rahul Kumar</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-light max-w-xl animate-fadeIn">
              I build exceptional digital experiences that combine cutting-edge technology with stunning design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/projects" className="group">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-xl font-medium shadow-lg hover:shadow-blue-500/30 hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto">
                  Explore My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl font-medium border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Profile picture */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Large colored orb behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500 dark:from-blue-600 dark:to-violet-700 rounded-full blur-2xl opacity-25 group-hover:opacity-30 transition-opacity duration-500 scale-110"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-400 dark:border-blue-600 rounded-full animate-spin-slow opacity-70"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src={profile}
                  alt="Rahul Kumar" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -right-4 top-5 py-2 px-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">2+ Years Exp.</span>
              </div>
              
              {/* Available status */}
              <div className="absolute -bottom-2 -left-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack section */}
        <div className="mt-32 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              Technologies I Work With
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className={`px-5 py-3 rounded-lg ${tech.color} shadow-lg text-white font-medium backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tech.name}
              </div>
            ))}
          </div>
          
         
         {/* Featured project preview */}
          <div className="mt-20 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
                Featured Project
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
              </h2>
            </div>
            
            <div className="relative group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main project card */}
              <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50">
                
                {/* Project status badge */}
                <div className="absolute -top-3 left-8">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full shadow-lg">
                    Live Project
                  </span>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Left side - Project details */}
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">M</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Meuzz</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Meme Social Media Platform</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                      Meuzz is where your humor gets the recognition it deserves. Upload your best content, vote on what's actually funny, and build your rep in a community that gets it. No cap, no algorithms – just pure vibes.
                    </p>
                    
                    {/* Tech stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">Built With</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-200 dark:border-blue-800">React</span>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300 rounded-xl text-sm font-medium border border-green-200 dark:border-green-800">Node.js</span>
                        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-medium border border-purple-200 dark:border-purple-800">Redux</span>
                        <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/60 text-yellow-700 dark:text-yellow-300 rounded-xl text-sm font-medium border border-yellow-200 dark:border-yellow-800">MongoDB</span>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://meuzz.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                      <Link to="/projects" className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <span>View Details</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right side - Project preview */}
                  <div className="lg:w-2/5">
                    <div className="relative">
                      {/* Device mockup */}
                      <div className="relative bg-gray-900 rounded-2xl p-2 shadow-2xl">
                        {/* Browser header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-t-xl">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-300">
                              meuzz.com
                            </div>
                          </div>
                        </div>
                        
                        {/* Content area */}
                        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 rounded-b-xl h-64 flex items-center justify-center relative overflow-hidden">
                          {/* Animated background elements */}
                          <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-lg rotate-12 animate-pulse"></div>
                          <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full animate-bounce"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-md rotate-45 animate-spin"></div>
                          
                          {/* Main content */}
                          <div className="text-center text-white z-10">
                            <div className="text-4xl font-bold mb-2">😂</div>
                            <div className="text-lg font-semibold">MEUZZ</div>
                            <div className="text-sm opacity-80">Where Memes Meet Community</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-float shadow-lg"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-float animation-delay-2000 shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom stats or features */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">🎯</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Social Platform</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">⚡</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fast & Responsive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">🎨</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Modern Design</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">🚀</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Full Stack</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
