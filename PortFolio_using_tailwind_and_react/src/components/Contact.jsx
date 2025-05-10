import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 pb-16 flex justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-400">Contact Information</h2>
        <ul className="space-y-2 text-left mb-4">
          <li><strong>Email:</strong> <a href="mailto:padegabharathkumar@gmail.com" className="text-blue-300 hover:underline">padegabharathkumar@gmail.com</a></li>
          <li><strong>Phone:</strong> <span className="text-gray-300">334-222-4552</span></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/bharath-padega" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">github.com/bharath-padega</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/bharathpadega" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">linkedin.com/in/bharathpadega</a></li>
        </ul>
        <div className="text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;