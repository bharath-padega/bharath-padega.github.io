import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: "C, C++, Python, Java, SQL"
    },
    {
      title: "Web Development",
      items: "HTML, CSS3, JavaScript, React"
    },
    {
      title: "Tools & Platforms",
      items: "Git, GitHub, Arduino, CAPL, Canoe"
    },
    {
      title: "Languages",
      items: "English, Hindi, Telugu"
    }
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 pb-16">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-1">{skill.title}</h3>
          <p className="text-sm text-gray-300">{skill.items}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;