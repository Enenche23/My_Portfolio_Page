import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
;

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Dessert Shop",
      description:
        "A site that allows you to shop for your favorite desserts",
      image: "../../quiz1.png",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Enenche23/dessertApp",
      liveLink: "https://dessertdelivery.netlify.app/",
    },
    {
      id: 2,
      title: "Quiz App",
      description:
        "A simple Quiz App with vite.",
      image: "../../quiz2.png",
      tags: ["ReactJs", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/Enenche23/quizApp",
      liveLink: "https://chrisquizeapp.netlify.app/",
    },
    {
      id: 3,
      title: "My Pet Baby",
      description:
        "This is an App that shows how interractive JavaScript could be.",
      image: "../../quiz3.png",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Enenche23/myPetBaby",
      liveLink: "https://mypetbaby.netlify.app/",
    },
    // Add more projects as needed
  ];

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-md'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-800 text-blue-400 border border-gray-700'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium ${
                      darkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Enenche23"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg ${
              darkMode
                ? 'bg-gray-900 text-gray-300 hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
            } transition-colors`}
          >
            <FaGithub size={20} className="mr-2" />
            <span>See more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;