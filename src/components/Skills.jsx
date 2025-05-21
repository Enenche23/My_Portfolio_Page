const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 },
        // Add or remove skills as needed
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 75 },
        { name: "Figma", level: 60 },
        // Add or remove skills as needed
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-md'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className={`text-xl font-bold mb-6 text-center ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Additional Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "UI/UX Design",
              "Performance Optimization",
              "RESTful APIs",
              "Testing",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              // Add more as needed
            ].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;