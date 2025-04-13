import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';

const About = ({ personalInfo, skills, education, achievements, certifications }) => {
  return (
    <div className="py-12">
      <SectionHeading 
        title="About Me" 
        subtitle="Get to know more about my skills, education, and achievements"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 col-span-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Who I Am
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {personalInfo.introduction}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {personalInfo.experience}
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className={index > 0 ? "pt-4 border-t border-gray-200 dark:border-gray-700" : ""}>
                <h4 className="font-bold text-gray-800 dark:text-white">{edu.institution}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-blue-600 dark:text-blue-400">{edu.period}</span>
                  <span className="text-gray-600 dark:text-gray-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="p-6">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((certification, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{certification}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;