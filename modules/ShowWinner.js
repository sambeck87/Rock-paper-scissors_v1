export default function ShowWinner(winner, userScore, cpuScore) {
  const img1 = document.getElementById('img_move_computer');
  const img2 = document.getElementById('img_move_user');
  const result = document.getElementById('result');
  const score = document.getElementById('score');
  const userText = document.getElementById('text_user_move');
  const computerText = document.getElementById('text_computer_move');

  setTimeout(() => {
    score.textContent = `${userScore}-${cpuScore}`;

    img1.remove();
    img2.remove();
    userText.textContent = '';
    computerText.textContent = '';
    result.classList.add('result', 't-center');
    result.classList.remove('divisor');

    const displayResult = document.createElement('p');
    displayResult.textContent = winner;
    displayResult.id = 'winner';
    result.appendChild(displayResult);
  }, 1000);
}
