# Tic-Tac-Toe Game

A modern and interactive Tic-Tac-Toe game built with React and styled using Tailwind CSS. This application features a smart AI opponent using the Minimax algorithm with Alpha-Beta Pruning.

## Features

- **Player vs Player** and **Player vs AI** modes.
- Smart AI opponent using the Minimax algorithm.
- Responsive design with a modern UI.
- Score tracking for both players and ties.
- Move history to navigate through the game steps.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript**: The programming language used for logic and interactivity.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

## Usage

- **Switch Modes**: Use the "Switch to AI" or "Switch to PvP" button to toggle between playing against another player or the AI.
- **Make Moves**: Click on the squares to make a move. The game will automatically switch turns.
- **Reset Game**: Click the "Reset Game" button to start a new game.
- **View Move History**: Navigate through the move history to see previous game states.

## Project Structure

- **src/components**: Contains all the React components used in the application.
- **src/utils**: Contains utility functions like the Minimax algorithm.
- **src/reducers**: Contains the game state management logic.
- **public**: Contains the HTML template and static assets.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## Customization

- **Styling**: Modify `src/index.css` and `tailwind.config.js` to customize the look and feel of the application.
- **Logic**: Update `src/utils/minimax.js` to tweak the AI logic.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by classic Tic-Tac-Toe games.
- Built with love using React and Tailwind CSS.
