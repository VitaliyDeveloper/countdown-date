const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startBtn.style.cssText = 'border-radius: 50%; background-color: green';
stopBtn.style.cssText = 'border-radius: 50%; background-color: red';

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopBtn.setAttribute('disabled', 'true');

function handleStart() {
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 500);
}

function handleStop() {
  stopBtn.setAttribute('disabled', 'true');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
}
