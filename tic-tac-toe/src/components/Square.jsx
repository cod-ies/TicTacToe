import React from 'react';

function Square({ value, onClick }) {
  const renderContent = () => {
    if (value === 'X') return '❌';
    if (value === 'O') return '⭕';
    return null;
  };

  return (
    <button
      className={`w-24 h-24 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden`}
      onClick={onClick}
    >
      <span className="text-5xl">{renderContent()}</span>
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 rounded-2xl transition-opacity duration-300"></span>
    </button>
  );
}

export default Square;