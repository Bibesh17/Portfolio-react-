import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Frontend Developer",
      company: "Sajilo Software",
      period: "2024 - 2025",
      description:
        "Created responsive and accessible user interfaces for web applications with a focus on user experience.",
      achievements: [
        "Redesigned company website increasing user engagement by 50%",
        "Implemented design system used across all products",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science and Information Technology",
      company: "Mahendra Morang Adarsha multiple capmpus",
      period: "2021 - 2025",
      description:
        "Graduated . Specialized in software engineering and web technologies.",
      achievements: [
        "GPA 3.2",
        "Published research on web performance optimization",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT / RIGHT CARD */}
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-2 rounded-lg ${
                          exp.type === "work" ? "bg-blue-100" : "bg-teal-100"
                        }`}
                      >
                        {exp.type === "work" ? (
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-teal-600" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>

                {/* EMPTY DIV FOR ALIGNMENT ON OPPOSITE SIDE */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
