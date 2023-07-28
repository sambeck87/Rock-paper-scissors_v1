export default function Clear() {
  const divisor = document.getElementById('result');
  const indication = document.getElementById('indication');
  const space = document.getElementById('space');
  setTimeout(() => {
    const result = document.getElementById('winner');
    result.remove();
    divisor.classList.remove('result', 't-center');
    divisor.classList.add('divisor');
    indication.classList.remove('hide');
    space.classList.add('hide');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }, 2000);
}
