export let user_score = 0
export let cpu_score = 0
export default function Winner(u_move, c_move) {
  const move = u_move + c_move
  switch (move) {
    case 'papelpiedra':
    case 'piedratijeras':
    case 'tijeraspapel':
      user_score++;
      return 'Ganaste';
    case 'piedrapapel':
    case 'tijeraspiedra':
    case 'papeltijeras':
      cpu_score++;
      return 'Perdiste';
    case 'papelpapel':
    case 'piedrapiedra':
    case 'tijerastijeras':
      return 'Empate';
  }
}

export function Reset() {
  const score = document.getElementById('score');
  user_score = 0;
  cpu_score = 0;
  score.textContent = `${user_score}-${cpu_score}`
}
