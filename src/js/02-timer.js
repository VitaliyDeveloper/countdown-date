import flatpickr from 'flatpickr';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_green.css';

/////SELECT ELEMENTS////////////////////
let selectedTime = null;

const refs = {
  headEl: document.querySelector('head'),
  timerEl: document.querySelector('.timer'),
  fieldEl: document.querySelectorAll('.field'),
  spanValueEl: document.querySelectorAll('.value'),
  inputEl: document.querySelector('#datetime-piker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEL: document.querySelector('[data-seconds]'),
};

/////STYLE//////////////////////////////////////
refs.timerEl.style.cssText = 'display: flex; aling-items: center';
refs.startBtn.style.backgroundColor = '#1BBC9B';
refs.fieldEl.forEach(el => {
  el.style.cssText =
    'text-align: center; margin: 5px; display: flex; flex-direction: column; font-size: 15px; background-color:  #1BBC9B; border-radius: 5px; width: 70px';
});
refs.spanValueEl.forEach(el => {
  el.style.fontSize = '30px';
});
refs.headEl.insertAdjacentHTML(
  'beforeend',
  '<style>#datetime-picker {min-width: 250px; border-color: #1BBC9B; margin: 5px}</style>'
);

//////FLATPICKR////////////////////////////////////////////

const options = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
      selectedDates[0] = new Date();
    } else {
      refs.startBtn.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

////////START Btn///////////////////////////////////

refs.startBtn.addEventListener('click', handleStartTime);

function handleStartTime() {
  refs.startBtn.disabled = true;
  timer.updateTimer();
}

////CLASS COUNTDOWN TIMER///////////////////////////////
class CountdownTimer {
  constructor() {
    this.timerCount = null;
    this.isActive = false;
    refs.startBtn.disabled = true;
    this.daysEl = document.querySelector('[data-days]');
    this.hoursEl = document.querySelector('[data-hours]');
    this.minutesEl = document.querySelector('[data-minutes]');
    this.secondsEL = document.querySelector('[data-seconds]');
  }

  updateTimer() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.timerCount = setInterval(() => {
      const currentTime = Date.now();
      const delta = selectedTime - currentTime;
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      this.daysEl.textContent = days;
      this.hoursEl.textContent = hours;
      this.minutesEl.textContent = minutes;
      this.secondsEL.textContent = seconds;
      console.log(delta);
      if (delta < 1000) {
        this.stopTimer();
      }
    }, 1000);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  stopTimer() {
    clearInterval(this.timerCount);
  }
}

////padStart//////////////////////////////
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

///EXAMPLE//////////////////////////////////////
const timer = new CountdownTimer();

///////////////////////////////////////////////////
