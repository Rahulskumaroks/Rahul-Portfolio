import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Custom loader component with modern animation
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 dark:border-blue-400 animate-spin"></div>
        <div className="h-16 w-16 rounded-full border-r-4 border-l-4 border-purple-500 dark:border-purple-400 animate-spin absolute left-4 top-4"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold">RK</span>
        </div>
      </div>
    </div>
  );
};

// ScrollToTop component to ensure page starts at top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen  overflow-x-hidden">
        {loading ? <Loader /> : <AppContent />}
      </div>
    </Router>
  );
};

export default App;