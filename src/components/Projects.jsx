import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MedRepo",
      description:
        "Developed the frontend of the MedRepo web application as  part of a college project. Converted UI/UX designs into responsive, interactive pages, focused on enhancing user experience, ensuring cross-browser compatibility, andbackend integration.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image:
        "[https://images.pexels.com/photos/7679654/pexels-photo-7679654.jpeg?auto=compress&cs=tinysrgb&w=800](https://images.pexels.com/photos/7679654/pexels-photo-7679654.jpeg?auto=compress&cs=tinysrgb&w=800)",
      github: "[https://github.com](https://github.com)",
      live: "https://medrepo.vercel.app",
    },

    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with beautiful data visualizations and automated reporting.",
      tech: ["React", "D3.js", "Express", "MongoDB"],
      image:
        "[https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800](https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800)",
      github: "[https://github.com](https://github.com)",
      live: "[https://example.com](https://example.com)",
    },

    {
      title: "Fitness Tracker",
      description:
        "Mobile-responsive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      tech: ["React Native", "Firebase", "Node.js"],
      image:
        "[https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800](https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800)",
      github: "[https://github.com](https://github.com)",
      live: "[https://example.com](https://example.com)",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>{" "}
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>{" "}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and side projects{" "}
          </p>{" "}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
