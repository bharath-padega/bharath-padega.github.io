import React from 'react';

const AcademicProjects = () => {
  const projects = [
    {
      name: "Fire Fighting Robot",
      role: "Mini Project",
      description: "Designed and tested Arduino-based fire-fighting robot using sensors.",
      date: "Dec 2020"
    },
    {
      name: "Fingerprint-based Car Ignition",
      role: "Major Project",
      description: "Developed secure ignition system using Arduino, RFID and fingerprint sensor.",
      date: "Mar 2021"
    }
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 pb-16">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-1">{project.name}</h3>
          <p className="text-green-400 font-medium">{project.role}</p>
          <p className="text-sm text-gray-300 mb-2">{project.date}</p>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AcademicProjects;