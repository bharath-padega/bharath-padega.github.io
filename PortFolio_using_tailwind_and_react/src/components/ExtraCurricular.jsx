import React from 'react';

const ExtraCurricular = () => {
  const events = [
    {
      title: "Udbhav - College Fest",
      role: "Event Manager",
      description: "Managed planning, budgeting, and coordination of college fest activities.",
      year: "2018–2019"
    },
    {
      title: "Bathukamma Festival",
      role: "Organizer",
      description: "Organized cultural performances and managed registrations and logistics.",
      year: "2019–2020"
    },
    {
      title: "Social Activities",
      role: "Volunteer",
      description: "Planted 200+ trees and ran 10K for cancer awareness.",
      year: "2020–2021"
    }
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 px-4 pb-16">
      {events.map((event, index) => (
        <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-green-400 font-medium">{event.role}</p>
          <p className="text-sm text-gray-400">{event.year}</p>
          <p className="text-sm text-gray-300 mt-2">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtraCurricular;