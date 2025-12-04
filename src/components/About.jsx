import { Code2, Palette, Rocket, Users } from "lucide-react";
import company from "../assets/company.png";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my passion",
    },
    {
      icon: Palette,
      title: "Design Focused",
      description:
        "Creating beautiful interfaces that users love to interact with",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>{" "}
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>{" "}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div
              className="w-90 h-99 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-2xl
            "
            >
              <img
                src={company}
                alt="company photo "
                className="max-h-full max-w-full object-contain rounded-2xl "
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer Building Digital Excellence
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 1 years of experience in web development, I specialize
              in building exceptional digital experiences that combine beautiful
              design with robust functionality.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey in tech started with a curiosity about how things work,
              which evolved into a passion for creating solutions that make a
              real difference in people's lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source
              projects, writing technical articles, or exploring the latest
              technologies in the ever-evolving world of web development.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
