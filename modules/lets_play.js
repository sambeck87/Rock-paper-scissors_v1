import ComputersMove from './computers_move.js';
import ModDom from './mod_dom.js';
import Winner, { userScore, cpuScore } from './winner.js';
import ShowWinner from './ShowWinner.js';
import Clear from './clear.js';

export default function LetsPlay(usersMove) {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.disabled = true;
  });
  const computerMove = ComputersMove();
  ModDom(usersMove, computerMove);
  const winner = Winner(usersMove, computerMove);
  ShowWinner(winner, userScore, cpuScore);
  Clear();
}
