// eslint-disable-next-line
export let userScore = 0;
// eslint-disable-next-line
export let cpuScore = 0;
export default function Winner(uMove, cMove) {
  const move = uMove + cMove;
  switch (move) {
    case 'papelpiedra':
    case 'piedratijeras':
    case 'tijeraspapel':
      // eslint-disable-next-line
      userScore++;
      return 'Ganaste';
    case 'piedrapapel':
    case 'tijeraspiedra':
    case 'papeltijeras':
      // eslint-disable-next-line
      cpuScore++;
      return 'Perdiste';
    default: return 'Empate';
  }
}

export function Reset() {
  const score = document.getElementById('score');
  userScore = 0;
  cpuScore = 0;
  score.textContent = `${userScore}-${cpuScore}`;
}
