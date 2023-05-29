import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

refs = {
    startBtn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

refs.startBtn.disabled = true;

let selectedDate = 0;

const options = {
  enableTime: true, // disabled time choise 
  time_24hr: true, // 12h > 24h
  defaultDate: new Date(), // current time 
  minuteIncrement: 1,  // step for 1 second
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
       
            
        if (selectedDates[0] - new Date() <= 0) {
          return Notiflix.Notify.failure("Please choose a date in the future");
        } refs.startBtn.disabled = false;
  },
};

flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener('click', () => {
    setInterval(() => {
        setTimer()
    },1000)
 })

function setTimer() {
    refs.startBtn.disabled = true;
     
    if ((selectedDate - new Date()) < 0) {
        return;
    }

    let timer = convertMs(selectedDate - new Date())
    
        refs.days.textContent = timer.days;
        refs.hours.textContent = timer.hours;
        refs.minutes.textContent = timer.minutes;
        refs.seconds.textContent = timer.seconds;
}

function addZero(value) {
    return String(value).padStart(2, '0')
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZero(Math.floor(ms / day));
  // Remaining hours
    const hours = addZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


