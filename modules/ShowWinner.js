export default function ShowWinner(winner, user_score, cpu_score) {
  const img1 = document.getElementById('img_move_computer');
  const img2 = document.getElementById('img_move_user');
  const result = document.getElementById('result');
  const score = document.getElementById('score');
  const user_text = document.getElementById('text_user_move');
  const computer_text = document.getElementById('text_computer_move');

  setTimeout(() => {
    score.textContent = `${user_score}-${cpu_score}`

    img1.remove();
    img2.remove();
    user_text.textContent = "";
    computer_text.textContent = "";
    result.classList.add('result', 't-center');
    result.classList.remove('divisor')

    const display_result = document.createElement("p");
    display_result.textContent = winner;
    display_result.id = 'winner'
    result.appendChild(display_result)
  }, 1000);
}
