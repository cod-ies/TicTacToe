import React from 'react';

function Scoreboard({ scores }) {
  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl shadow-md mb-6">
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium text-indigo-700">Player X</span>
        <span className="text-2xl font-bold text-indigo-900">{scores.X}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium text-gray-600">Ties</span>
        <span className="text-2xl font-bold text-gray-800">{scores.Ties}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium text-purple-700">Player O</span>
        <span className="text-2xl font-bold text-purple-900">{scores.O}</span>
      </div>
    </div>
  );
}

export default Scoreboard;