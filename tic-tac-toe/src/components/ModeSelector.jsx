import React from 'react';

function ModeSelector({ isAIMode, toggleAIMode }) {
  return (
    <div className="flex justify-center mt-6">
      <button
        className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg ${
          isAIMode 
            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' 
            : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'
        }`}
        onClick={toggleAIMode}
      >
        {isAIMode ? 'Switch to PvP' : 'Switch to AI'}
      </button>
    </div>
  );
}

export default ModeSelector;