const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    // {
    //   category: "Backend",
    //   skills: [
    //     { name: "Node.js / Express", level: 5 },
    //     { name: "PostgreSQL", level: 6 },
    //     { name: "REST APIs", level: 10 },
    //     { name: "GraphQL", level: 5 },
    //   ],
    // },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git / GitHub", level: 60 },
        { name: "Docker", level: 7 },
        { name: "AWS / Cloud", level: 35 },
        { name: "Figma", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise{" "}
          </h2>{" "}
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>{" "}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks{" "}
          </p>{" "}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
