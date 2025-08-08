
import React from 'react';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import buzz from "../assets/img/projects/buzz.png"
import msat from "../assets/img/projects/msat.png"
import soar from "../assets/img/projects/soar.png"
import adsprint from "../assets/img/projects/adsprint.png"
import bharosa from "../assets/img/projects/bharosa.png"
import parivaar from "../assets/img/projects/parivaar.png"
import cdp from "../assets/img/projects/cdp.png"
import trufan from "../assets/img/projects/trufan.png"

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "BUZZ",
      description: "Buzz boosts local tourism and community connections with a user-friendly platform, offering maps and real-time updates. It collaborates with partners to increase engagement, promoting local economies and strengthening community bonds.",
      image: buzz,
      tech: ["React", "Redux", "RTK", "JavaScript"],
      category: "Frontend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Soar",
      description: "Soar within Cyber Defense Portal automates incident response, streamlining processes and reducing manual effort. It integrates security tools and workflows for efficient incident investigation and containment, improving overall security operations.",
      image: soar,
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS Grid", "MUI"],
      category: "Frontend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "ADSprint",
      description: "ADSprint is a web-based platform for news agencies to manage advertising campaigns, including classifieds, obituaries, and financial reports. It offers agencies full control over online advertising, enhancing campaign management and effectiveness.",
      image: adsprint,
      tech: ["React", "OpenAI API", "WebSocket", "Redis", "Express", "TypeScript", "Node.JS"],
      category: "Full Stack",
      liveUrl: "#",
      codeUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/projects')}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
