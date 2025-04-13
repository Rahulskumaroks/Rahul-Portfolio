import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { ArrowRight } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Reset and trigger animations when tab changes
    setAnimateIn(false);
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  const workExperience = [
    {
      company: 'InternLink',
      position: 'Associate Software Engineer',
      period: 'Jun 2024 - Present',
      description: 'Working on India\'s 1st Generative AI-based hiring platform that revolutionizes the internship matching process.',
      achievements: [
        'Utilizing React Native to build a dynamic app with AI-driven matchmaker features',
        'Implemented features using NodeJS and MongoDB that allow users to swipe through internship opportunities',
        'Reduced recruitment time from 2 weeks to just 24 hours through efficient data processing',
        'Focused on creating an intuitive and seamless interface, improving user engagement on the platform'
      ]
    },
    {
      company: 'Curiosense Innovation PVT LTD',
      position: 'Backend Developer',
      period: 'Mar 2024 - May 2024',
      description: 'Designed and implemented website routing strategies to enhance user experience and streamline navigation.',
      achievements: [
        'Conducted comprehensive API testing utilizing Postman, ensuring reliability and optimal performance',
        'Devised user-centric routing strategies that improved website usability by 95%',
        'Successfully led the launch and maintenance of the website during the fest period',
        'Contributed to increased user satisfaction and retention through improved navigation'
      ]
    }
  ];
  
  const skills = {
    languages: ['C++', 'JavaScript', 'Python', 'Java', 'Linux Shell Scripting'],
    frameworks: ['React JS', 'React Native', 'Hadoop Map Reduce', 'HIVE'],
    databases: ['MongoDB', 'MySQL', 'Oracle'],
    tools: ['Git', 'VS Code', 'ETL Tools', 'Postman']
  };
  
  const skillLevels = {
    languages: 'Advanced',
    frameworks: 'Proficient',
    databases: 'Intermediate',
    tools: 'Proficient'
  };

  // Map skill categories to display titles
  const skillTitles = {
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases',
    tools: 'Developer Tools'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 relative py-20 overflow-hidden">
 
      {/* Animated background elements */}
      <div className="absolute -top-64 -left-32 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-96 -right-32 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-64 left-32 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Floating shapes */}
      <div className="hidden md:block absolute top-20 right-32 w-12 h-12 bg-blue-400 dark:bg-blue-600 rounded-lg rotate-12 animate-float"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-8 h-8 bg-pink-400 dark:bg-pink-600 rounded-full animate-float animation-delay-2000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400 dark:bg-yellow-600 rounded-md rotate-45 animate-float animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and technical expertise"
        />
        
        {/* Tab selector - styled like home page buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white/30 dark:bg-gray-800/40 backdrop-blur-sm p-1.5 rounded-xl shadow-lg border border-gray-200/30 dark:border-gray-700/30">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              Skills
            </button>
          </div>
        </div>
        
        {/* Work Experience Tab */}
        {activeTab === 'work' && (
          <div className={`space-y-10 transition-all duration-500 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {workExperience.map((job, index) => (
             <Card delay={index * 150}>
             <div className="p-8">
               {/* Job header with gradient underline */}
               <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                 <div>
                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                     {job.position}
                   </h3>
                   <p className="relative inline-block">
                     <span className="text-xl bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent font-medium">
                       {job.company}
                     </span>
                     <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 rounded-full"></span>
                   </p>
                 </div>
                 
                 <div className="mt-3 md:mt-0">
                   <span className="px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                     {job.period}
                   </span>
                 </div>
               </div>
               
               <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                 {job.description}
               </p>
               
               {/* Key achievements section with styled list */}
               <div className="bg-gray-50/70 dark:bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm">
                 <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                   Key Contributions
                 </h4>
                 <ul className="space-y-4">
                   {job.achievements.map((achievement, idx) => (
                     <li key={idx} className="flex items-start group">
                       <div className="flex-shrink-0 mt-1.5 mr-3 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 group-hover:scale-150 transition-transform duration-300"></div>
                       <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           </Card>
            ))}
          </div>
        )}
        
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {Object.keys(skills).map((category, index) => (
            <Card delay={index * 150}>
            {/* Skill card header with gradient */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 dark:from-blue-600/30 dark:to-violet-600/30"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {skillTitles[category]}
                 </h3>
               </div>
              </div>
             
             {/* Skill progress bars */}
             <div className="p-6 space-y-6">
               {skills[category].map((item) => (
                 <div key={item} className="group">
                   <div className="flex justify-between mb-2">
                     <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {skillLevels[category]}
                    </span>
                   </div>
                   <div className="w-full bg-gray-200/70 dark:bg-gray-700/70 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 rounded-full group-hover:animate-pulse"
                      style={{                    width: category === 'languages' ? `${Math.random() * 15 + 80}%` :
                               category === 'frameworks' ? `${Math.random() * 20 + 70}%` :
                               category === 'databases' ? `${Math.random() * 25 + 65}%` :
                               `${Math.random() * 15 + 75}%` 
                      }}
                    ></div>
                   </div>
                </div>
               ))}
       </div>
         </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;