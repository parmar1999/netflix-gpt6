import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full 
    bg-gradient-to-r from-black to-transparent pt-36 px-24 absolute text-white flex flex-col justify-center space-y-4">
      <h1 className="text-5xl font-extrabold mb-4 mt-5 leading-tight">{title}</h1> {/* Title should appear here */}
      <p className="text-lg mb-6 mt-6 max-w-2xl leading-relaxed">{overview}</p>  {/* Overview should appear here */}
      <div className="space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-2.5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
