import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
              <img
                src={profile}
                className="w-full h-full object-cover rounded-full"
                alt="profiles"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Bibesh Pokharel</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            Frontend Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Crafting beautiful, functional, and user-centric digital experiences
            with modern technologies
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Bibesh17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/bibesh-pokharel-70557b2aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:example@example.com"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <button onClick={() => scrollToSection("about")}>
              <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
