import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full">
        <Board />
      </div>
    </div>
  );
}

export default App;