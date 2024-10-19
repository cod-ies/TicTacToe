import React from 'react';

function GameStatus({ status }) {
  return (
    <div className="text-center text-2xl font-poppins font-semibold text-gray-800">
      {status}
    </div>
  );
}

export default GameStatus;