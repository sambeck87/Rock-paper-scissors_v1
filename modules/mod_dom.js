export default function ModDom(u_move, c_move) {
  const indication = document.getElementById('indication');
  const space = document.getElementById('space');
  const users_move = document.getElementById('users_move');
  const computers_move = document.getElementById('computers_move');
  const user_text = document.getElementById('text_user_move');
  const computer_text = document.getElementById('text_computer_move');

  indication.classList.add('hide');
  space.classList.remove('hide');
  const img_computer = document.createElement("img");
  img_computer.src = `../images/${c_move}.png`;
  img_computer.alt = c_move;
  img_computer.id = "img_move_computer";
  computers_move.appendChild(img_computer)

  const img_user = document.createElement("img");
  img_user.src = `../images/${u_move}.png`;
  img_user.alt = u_move;
  img_user.id = "img_move_user";
  users_move.appendChild(img_user)

  user_text.textContent = u_move;
  computer_text.textContent = c_move;
}
