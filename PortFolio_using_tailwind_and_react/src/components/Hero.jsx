import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Education from './Education';
import AcademicProjects from './AcademicProjects';
import Experience from './Experience';
import ExtraCurricular from './ExtraCurricular';
import Skills from './Skills';
import Contact from './Contact';

const Hero = () => {
  const [activeTab, setActiveTab] = useState("education");

  const renderContent = () => {
    switch (activeTab) {
      case "education": return <Education />;
      case "projects": return <AcademicProjects />;
      case "experience": return <Experience />;
      case "extras": return <ExtraCurricular />;
      case "skills": return <Skills />;
      case "contact": return <Contact />;
      default: return <Education />;
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-4 mb-8">
        {["education", "projects", "experience", "extras", "skills", "contact"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-[160px] text-lg px-6 py-3 border-2 rounded-md font-semibold transition ${
              activeTab === tab
                ? "bg-green-500 text-white border-green-500"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <img
          src="/profile.jpg"
          alt="Bharath Kumar Padega"
          className="w-60 h-60 rounded-full border-4 border-white shadow-md object-cover mx-auto"
        />
      </div>

      <div className="text-left max-w-4xl w-full px-4">
        <h1 className="text-5xl font-bold mb-4">Hey, I'm <span className="text-green-400">Bharath Kumar Padega</span>.</h1>
        <p className="text-2xl text-gray-300">
          Welcome to my space. Explore what I’ve built and who I am!
        </p>
      </div>

      <div className="w-full max-w-5xl mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;