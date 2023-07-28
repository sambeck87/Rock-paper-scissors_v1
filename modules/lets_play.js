import ComputersMove from "./computers_move.js";
import ModDom from "./mod_dom.js";
import Winner, { user_score, cpu_score } from "./winner.js";
import ShowWinner from "./ShowWinner.js";
import Clear from "./clear.js";

export default function LetsPlay(users_move) {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.disabled = true;
  });
  const computers_move = ComputersMove();
  ModDom(users_move, computers_move);
  const winner = Winner(users_move, computers_move);
  ShowWinner(winner, user_score, cpu_score)
  Clear();
}
