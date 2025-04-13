import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['C++', 'JavaScript', 'Python', 'Java', 'Linux Shell Scripting'] },
    { category: 'Frameworks & Libraries', items: ['React JS', 'React Native', 'Hadoop Map Reduce', 'HIVE'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Oracle'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'ETL Tools', 'Postman'] },
  ];

  const education = [
    { 
      institution: 'Acharya Institute of Technology, Bangalore', 
      degree: 'Bachelor of Engineering (B.E) in Computer Science', 
      period: '2020-2024', 
      score: 'CGPA: 8.15' 
    },
    { 
      institution: 'Delhi Model Public School, Patna', 
      degree: 'CBSE (Class XII, PCM)', 
      period: '2018-2019', 
      score: 'Aggregate: 87.2%' 
    }
  ];

  const achievements = [
    'Information Security Head in Developer\'s Club of Acharya',
    'Team Head in Acharya Habba, Bangalore\'s biggest cultural fest',
    'Organized Technical Event at Acharya Habba 2023',
    'Solved various problems on LeetCode'
  ];

  const certifications = [
    'Certified by Udemy in Website Hacking/Penetration Testing',
    'Certified by Infosys Spring Board in JavaScript',
    'Certified by Google Cloud Skills Boost in Google Cloud Fundamentals: Core Infrastructure'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute -top-64 -right-32 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-96 -left-32 w-96 h-96 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-64 right-32 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Floating shapes */}
      <div className="hidden md:block absolute top-32 left-20 w-10 h-10 bg-blue-400 dark:bg-blue-600 rounded-lg rotate-12 animate-float"></div>
      <div className="hidden md:block absolute bottom-60 right-20 w-8 h-8 bg-purple-400 dark:bg-purple-600 rounded-full animate-float animation-delay-2000"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-400 dark:bg-yellow-600 rounded-md rotate-45 animate-float animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title={
            <span className="relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 rounded-full"></span>
            </span>
          } 
          subtitle="Get to know more about my journey, skills, and achievements"
          className="mb-16 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block">
              Who I Am
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              I'm a passionate Software Engineer with a focus on building innovative applications that solve real-world problems. With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences backed by robust server-side logic.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              My experience spans from developing AI-driven applications that revolutionize hiring processes to implementing efficient backend solutions. I'm constantly exploring new technologies and approaches to stay at the forefront of the rapidly evolving tech landscape.
            </p>
          </Card>

          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className={index > 0 ? "pt-6 border-t border-gray-200 dark:border-gray-700" : ""}>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
                    <span className="text-gray-600 dark:text-gray-400">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2">
            Technical Skills
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <Card 
                key={skillGroup.category} 
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
                  {skillGroup.category}
                  <span className="absolute -bottom-1 left-0 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => {
                    // Assign different colors to each skill
                    const colors = [
                      'bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300',
                      'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ', 
                      'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 ',
                      'bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 ',
                      'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 '
                    ];
                    const colorIndex = index % colors.length;
                    
                    return (
                      <span 
                        key={skill} 
                        className={`${colors[colorIndex]} px-3 py-1  rounded-full text-sm`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block">
              Achievements
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block">
              Certifications
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {certifications.map((certification, index) => (
                <li key={index} className="group">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 group-hover:from-blue-100 group-hover:to-violet-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-violet-900/30 transition-colors duration-300 shadow-sm group-hover:shadow">
                    <span className="text-gray-700 dark:text-gray-200 text-lg">{certification}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;   