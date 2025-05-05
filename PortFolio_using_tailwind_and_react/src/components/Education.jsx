import React from 'react';

const Education = () => {
  const data = [
    {
      title: "Auburn University at Montgomery",
      degree: "Master’s in Computer Science",
      period: "Jan 2024 – Present",
      gpa: "GPA: 3.80 / 4.00",
    },
    {
      title: "Aurora’s Scientific Technological and Research Academy",
      degree: "B.Tech in Electronics & Communication",
      period: "Jul 2017 – Jul 2021",
      gpa: "GPA: 7.10 / 10.00",
    },
    {
      title: "Sri Chaitanya Junior Kalashala",
      degree: "Intermediate (MPC)",
      period: "Jun 2015 – Apr 2017",
      gpa: "GPA: 9.64 / 10.00",
    },
    {
      title: "St. Mary’s Vidhyanikethan High School",
      degree: "Secondary School Certificate",
      period: "Jul 2005 – Apr 2015",
      gpa: "GPA: 9.20 / 10.00",
    }
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 pb-16">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-green-400 font-medium">{item.degree}</p>
          <p className="text-sm text-gray-400">{item.period}</p>
          <p className="text-sm text-gray-300 mt-1">{item.gpa}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;