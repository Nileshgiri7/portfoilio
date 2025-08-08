
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Eye, Filter } from 'lucide-react';
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
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const allProjects = [
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
      title: "MSAT",
      description: "MSAT offers a holistic view of certification and compliance, integrating multiple standards into one system. This tool enhances decision-making and efficiency, fostering trust with clients and stakeholders in the enterprise and system protection.",
      image: msat,
      tech: ["HTML", "JavaScript", "Ajax", ".Net"],
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
    },
    {
      title: "Bharosa agri tech",
      description: "Bharosa Agri Tech Portal provides a comprehensive platform for farmers to verify and manage land and crop information. This helps them generate reports and access loans from banks, facilitating financial support and growth in the agricultural sector.",
      image: bharosa,
      tech: ["React.JS", "D3.js", "Node.js", "PostgreSQL", "RTK"],
      category: "Full Stack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Parivaar Org",
      description: "Parivaar Organization, an NGO, provides free education and accommodation to underprivileged students. The project involves developing a human resource management system to maintain records of employees and activities, ensuring efficient operations.",
      image: parivaar,
      tech: ["React", "Redux", "RTK", "JavaScript"],
      category: "Frontend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Cyber Portal",
      description: "TruFan is a sports gaming platform that allows users to participate in cricket, basketball, football and other games tournaments and predict match outcomes. It offers a chance to test sports knowledge and win prizes, enhancing the user experience.",
      image: cdp,
      tech: ["Next.js", "JavaScript", "PostgreSQL", "Mapbox", "Node.Js"],
      category: "Full Stack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "TruFan",
      description: "An educational platform with course creation tools, interactive lessons, progress tracking, quizzes, certificates, and collaborative learning features.",
      image: trufan,
      tech: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS S3"],
      category: "Mobile",
      liveUrl: "#",
      codeUrl: "#",
    },
    // {
    //   title: "Real Estate Platform",
    //   description: "A property listing platform with advanced search, virtual tours, mortgage calculator, agent profiles, and integrated communication tools for buyers and sellers.",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    //   tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe"],
    //   category: "fullstack",
    //   liveUrl: "#",
    //   codeUrl: "#",
    // },
    // {
    //   title: "IoT Dashboard",
    //   description: "An Internet of Things monitoring dashboard with real-time sensor data visualization, device management, automated alerts, and predictive analytics.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    //   tech: ["React", "MQTT", "InfluxDB", "Grafana", "Docker"],
    //   category: "fullstack",
    //   liveUrl: "#",
    //   codeUrl: "#",
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Full Stack', label: 'Full Stack' },
    // { id: 'backend', label: 'Backend' },
    { id: 'Mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-105'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border border-gray-200 dark:border-gray-700"
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
