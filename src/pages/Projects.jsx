import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';

const Projects = () => {
  const projects = [
    {
      title: 'Code-Deck',
      description: 'A versatile code editor built with ReactJS and CodeMirror, providing a seamless coding experience with multi-language support (C++, Python, Java, JavaScript) and multi-theme support.',
      technologies: ['ReactJS', 'CodeMirror', 'Judge0 CE API', 'Rapid API', 'Axios', 'React Router'],
      link: 'https://code-deck.vercel.app/',
      github: '#',
      image: 'https://via.placeholder.com/600x340',
      highlights: [
        'Multi-language support for C++, Python, Java, and JavaScript',
        'Real-time code compilation and execution using Judge0 CE API',
        'Upload and download capabilities for code and text files',
        'Local storage for multiple playgrounds and input/output consoles'
      ]
    },
    {
      title: 'Thread-App-Clone',
      description: 'A high-performance social media application using React Native, achieving a 20% increase in user retention through a seamless cross-platform experience.',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API'],
      link: 'https://drive.google.com/file/d/1mulR62ldkgmW8qjdt17vBoIU3RgdLqsQ/view?pli=1',
      github: '#',
      image: 'https://via.placeholder.com/600x340',
      highlights: [
        'AI-driven reply functionality with Google Gemini API',
        '35% boost in user engagement and interaction',
        '40% improvement in data processing speed',
        'Real-time updates and notifications'
      ]
    },
    {
      title: 'Meuzz',
      description: 'Meuzz is where your humor gets the recognition it deserves. Upload your best content, vote on what's actually funny, and build your rep in a community that gets it. No cap, no algorithms – just pure vibes.',
      technologies: ['React', 'Node Js', 'Redux', 'Express', 'PostgreSQL'],
      link: 'https://meuzz.com',
      github: '',
      image: 'https://via.placeholder.com/600x340',
      highlights: [
        'Up to 99.75% accuracy in CKD detection',
        'KNN imputation to handle missing patient data',
        'Multiple model comparison (SVM, KNN, naive Bayes, neural networks)',
        'Potential for early CKD detection in clinical settings'
      ]
    }
  ];

  return (
    <div className="py-12">
      <SectionHeading 
        title="My Projects" 
        subtitle="Explore some of my recent work and personal projects"
      />

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`flex flex-col ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}
          >
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech,index) => {
                      
                      const colors = [
                        'bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300',
                        'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ', 
                        'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 ',
                        'bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 ',
                        'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 '
                      ];
                      const colorIndex = index % colors.length;
                      return(
                      <span 
                        key={tech} 
                        className={`px-3 py-1  rounded-full text-sm ${colors[colorIndex]}`}
                      >
                        {tech}
                      </span>)}
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project?.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
