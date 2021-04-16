// Bring element into file
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const circleEl = document.querySelector('.circle');
const toggle = document.querySelector('.toggle');

const needleSecond = document.querySelector('.needle.second');
const needleMinute = document.querySelector('.needle.minute');
const needleHour = document.querySelector('.needle.hour');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Dark Mode
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Light Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Dark Mode';
  }
});

// Clock
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const date = time.getDate();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  // const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)
  `;

  minuteEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)
  `;

  secondEl.style.transform = `
  translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)
  `;

  needleHour.style.transition = `${hours === 0 ? 'none' : 'all 0.2s ease-in'}`;

  needleMinute.style.transition = `${
    minutes === 0 ? 'none' : 'all 0.2s ease-in'
  }`;

  needleSecond.style.transition = `${
    seconds === 0 ? 'none' : 'all 0.2s ease-in'
  }`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  // timeEl.innerHTML = `${hoursForClock}:${
  //   minutes < 10 ? `0${minutes}` : minutes
  // } ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  // circleEl.innerHTML = '10';
}

// Scale function
const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

setTime();

setInterval(setTime, 1000);
