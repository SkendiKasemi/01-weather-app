const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const period = hours >= 12 ? 'PM' : 'AM';

if (minutes >= 59) {
  hours = (hours + 1) % 24;
}

export let currentTime = (hours % 12 || 12) + ':00 ' + period;

