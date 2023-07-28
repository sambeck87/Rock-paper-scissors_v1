export default function ModDom(uMove, cMove) {
  const indication = document.getElementById('indication');
  const space = document.getElementById('space');
  const usersMove = document.getElementById('users_move');
  const computersMove = document.getElementById('computers_move');
  const userText = document.getElementById('text_user_move');
  const computerText = document.getElementById('text_computer_move');

  indication.classList.add('hide');
  space.classList.remove('hide');
  const imgComputer = document.createElement('img');
  imgComputer.src = `../images/${cMove}.png`;
  imgComputer.alt = cMove;
  imgComputer.id = 'img_move_computer';
  computersMove.appendChild(imgComputer);

  const imgUser = document.createElement('img');
  imgUser.src = `../images/${uMove}.png`;
  imgUser.alt = uMove;
  imgUser.id = 'img_move_user';
  usersMove.appendChild(imgUser);

  userText.textContent = uMove;
  computerText.textContent = cMove;
}
