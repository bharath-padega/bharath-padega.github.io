import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: "Software Test Engineer",
      company: "KPIT Technologies Ltd.",
      period: "Nov 2021 – Dec 2023",
      description: "Worked on ECU testing using Canoe and CAPL. Designed and executed test cases and collaborated with development teams."
    },
    {
      role: "Research Assistant",
      company: "Advanced GNSS Lab",
      period: "Dec 2019 – Jan 2020",
      description: "Collected and analyzed satellite data, cleaned datasets, and derived insights for location-based services."
    },
    {
      role: "Machine Learning Intern",
      company: "Inkwall Technologies",
      period: "Aug 2021 – Oct 2021",
      description: "Worked on ML projects and placed among top 2 of 68 participants in a hands-on machine learning seminar."
    }
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 pb-16">
      {jobs.map((job, index) => (
        <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-1">{job.role}</h3>
          <p className="text-green-400 font-medium">{job.company}</p>
          <p className="text-sm text-gray-400">{job.period}</p>
          <p className="text-sm text-gray-300 mt-2">{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;